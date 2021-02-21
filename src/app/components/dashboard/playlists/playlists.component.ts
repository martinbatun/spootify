import { Component, OnInit } from '@angular/core';
import { ApiService } from '@ser/api.service';
import { Data } from 'src/app/interfaces/data';
import { Item } from 'src/app/interfaces/item';


@Component({
  selector: 'app-playlists',
  templateUrl: './playlists.component.html',
  styleUrls: ['./playlists.component.css']
})
export class PlaylistsComponent implements OnInit {

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

      this.API.get('me/playlists').subscribe((data: { items: any[] }) => {
        data.items.forEach(e => {
          this.getTracks(new Data(e['id'], e['name'], []));
        });
      });

    })

  }

  ngOnInit(): void {
  }


  /**
   * Recive un nuevo item y pide sus canciones para agregarlas al item.
   * cuando agregue las canciones agrega el item al array principal
   * @param item item a agregar al array principal
   * @author Martin Batun Tec.
  */
  getTracks(item: Data): void {
    this.API.get(`playlists/${item.id}/tracks`).subscribe((data: { items: any[] }) => {
      data.items.forEach(e => {
        item.items.push(new Item(e['track']['id'], e['track']['name'], e['track']['album']['images'][0]['url'], e['track']['artists'][0]['name']))
      });
      this.data.push(item);
    });
  }

}
