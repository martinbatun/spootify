import { Component, OnInit } from '@angular/core';
import { ApiService } from '@ser/api.service';
import { interval } from 'rxjs';
import { takeWhile, tap } from 'rxjs/operators';

export class Data {
  id: number;
  title: string;
  albums: any[];
}

@Component({
  selector: 'app-discover',
  templateUrl: './discover.component.html',
  styleUrls: ['./discover.component.css']
})
export class DiscoverComponent implements OnInit {

  data: Data[] = [];

  constructor(
    private API: ApiService
  ) {

    /**
     * Cuando ya exista autenticacion realiza las peticiones.
     * de lo contrario solo inicia nuevamente el array
     * @author Martin Batun Tec.
    */
    this.API.update.subscribe((get: boolean) => {

      this.data = [];

      if (!get) { return }

      this.API.get('browse/new-releases').subscribe((data: { albums: { items: [] } }) => {
        if (this.data.filter(e => e.id == 1).length == 0) {
          this.data.push({
            id: 1,
            title: 'released this week',
            albums: data.albums.items
          })
        }
      });

      this.API.get('browse/featured-playlists').subscribe((data: { playlists: { items: [] } }) => {
        if (this.data.filter(e => e.id == 2).length == 0){
          this.data.push({
            id: 2,
            title: 'featured playlists',
            albums: data.playlists.items
          })
        }
      });

      this.API.get('browse/categories').subscribe((data: { categories: { items: [] } }) => {
        if (this.data.filter(e => e.id == 3).length == 0){
          this.data.push({
            id: 3,
            title: 'browse',
            albums: data.categories.items
          })
        }
      });
    })
  }

  ngOnInit(): void {
  }


  /**
 * Realiza un scroll del div.
 * @param el elemnto contenedor.
 * @param type define el sentido en el que se realizara el scroll
 * @author Martin Batun Tec.
*/
  scroll(el: Element, type: 'left' | 'right') {
    const animTimeMs = 400;
    const pixelsToMove = 315;
    const stepArray = [0.001, 0.021, 0.136, 0.341, 0.341, 0.136, 0.021, 0.001];
    if (type == 'left') {
      interval(animTimeMs / 8)
        .pipe(
          takeWhile(value => value < 8),
          tap(value => el.scrollLeft -= (pixelsToMove * stepArray[value])),
        )
        .subscribe();
    } else {
      interval(animTimeMs / 8)
        .pipe(
          takeWhile(value => value < 8),
          tap(value => el.scrollLeft += (pixelsToMove * stepArray[value])),
        )
        .subscribe();
    }
  }

}
