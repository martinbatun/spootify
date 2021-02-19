import { Component, OnInit, HostListener, HostBinding } from '@angular/core';
import { Router, Event, NavigationEnd } from "@angular/router";
import { ApiService } from '@ser/api.service';
import { LoaderService } from '@ser/loader.service';
import { MenuItems, MENUITEMS} from './dashboard.config';
import { PageAnimations, ListStagger } from '@ani/animations';
import { environment } from '@env/environment';
declare var $: any;

export class User {
  id: number;
  display_name: string;
  email: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  animations: [PageAnimations, ListStagger],
})
export class DashboardComponent implements OnInit {
  @HostBinding('@pageAnimations')

  toggled: boolean;
  pinned: boolean;
  hovered: boolean;
  is_login: boolean;

  user: User;
  menuItems: MenuItems[] = [];

  constructor(
    private RT: Router,
    private API: ApiService,
    private LS: LoaderService,
  ) {

    /**
    * Por cada cambio de ruta en el proyecto ejecuta el loader .
    * @author Martin Batun Tec.
    */
    this.RT.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.LS.start(); this.LS.stop(1000);
      }
    });

    this.menuItems = MENUITEMS.filter(x => { return x });

    localStorage.getItem("spootify") ? this.getUser() : '';
  }

  ngOnInit() {
    this.resize();
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.resize();
  }


  /**
  * Verifica el tamaño de la pantalla para poder ajustar el sidebar.
  * @author Martin Batun Tec.
  */
  resize(): void {
    if (window.innerWidth < 992) {
      this.pinned = false;
      if ($('.overlay').hasClass('active')) {
        $('.overlay').removeClass('active');
      }
    } else {
      this.toggled = true;
      $('.overlay').removeClass('active');
    }
  }


  /**
  * En modo responsivo cierra el sidebar para dejar mas limpia la pantalla.
  * @author Martin Batun Tec.
  */
  collapse(boolean: boolean): void {
    if (window.innerWidth < 992) {
      if (this.toggled) {
        this.toggled = false;
        $('.overlay').removeClass('active');
      } else {
        this.toggled = true;
        $('.overlay').addClass('active');
      }
    } else if (window.innerWidth > 992 && boolean) {
      this.toggled = !this.toggled;
    }
  }



  /**
  * Pide la informacion de usuario.
  * @author Martin Batun Tec.
  */
  getUser(): void {
    this.API.get('me').subscribe((user: User) => {
      this.user = user;
      this.API.update.next(true);
      this.is_login = true;
    });
  }


  /**
  * Pide la el inicio de sesion para poder obtener un token.
  * @author Martin Batun Tec.
  */
  login(): void {

    var CLIENT_ID = environment.CLIENT_ID;
    var REDIRECT_URI = environment.REDIRECT_URI;

    function getLoginURL(scopes) {
      return 'https://accounts.spotify.com/authorize?client_id=' + CLIENT_ID +
        '&redirect_uri=' + encodeURIComponent(REDIRECT_URI) +
        '&scope=' + encodeURIComponent(scopes.join(' ')) +
        '&response_type=token';
    }

    var url = getLoginURL([
      'user-read-email'
    ]);

    var width = 450, height = 730, left = (screen.width / 2) - (width / 2), top = (screen.height / 2) - (height / 2);

    var t = this;
    window.addEventListener("message", function(event) {
      console.log(event);
      var hash = JSON.parse(event.data);
      if (hash.type == 'access_token') {
        localStorage.setItem('spootify', hash.access_token);
        t.getUser();
      }
    }, false);

    window.open(url,
      'Spotify',
      'menubar=no,location=no,resizable=no,scrollbars=no,status=no, width=' + width + ', height=' + height + ', top=' + top + ', left=' + left
    );
  }


  /**
  * Pide la informacion de usuario.
  * @author Martin Batun Tec.
  */
  logout(): void {
    localStorage.removeItem('spootify');
    this.API.update.next(false);
    this.is_login = false;
    this.user = null;
  }
}
