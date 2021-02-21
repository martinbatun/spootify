import { Component, OnInit } from '@angular/core';
import { ApiService } from '@ser/api.service';
import { Data } from 'src/app/interfaces/data';
import { Item } from 'src/app/interfaces/item';


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
          const item = new Data(1, 'released this week', []);
          data.albums.items.forEach(e => {
            item.items.push(new Item(e['id'], e['name'], e['images'][0]['url'], e['artists'][0]['name']))
          });
          this.data.push(item);
        }
      });

      this.API.get('browse/featured-playlists').subscribe((data: { playlists: { items: [] } }) => {
        if (this.data.filter(e => e.id == 2).length == 0) {
          const item = new Data(2, 'featured playlists', []);
          data.playlists.items.forEach(e => {
            item.items.push(new Item(e['id'], e['name'], e['images'][0]['url']))
          });
          this.data.push(item);
        }
      });

      this.API.get('browse/categories').subscribe((data: { categories: { items: [] } }) => {
        if (this.data.filter(e => e.id == 3).length == 0) {
          const item = new Data(2, 'featured playlists', []);
          data.categories.items.forEach(e => {
            item.items.push(new Item(e['id'], e['name'], e['icons'][0]['url']))
          });
          this.data.push(item);
        }
      });
    })
  }

  ngOnInit(): void {
  }

}
