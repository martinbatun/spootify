import { Component, OnInit } from '@angular/core';
import { ApiService } from '@ser/api.service';
import { Data } from 'src/app/interfaces/data';
import { Item } from 'src/app/interfaces/item';
import { Router, ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  search: string = null;
  data: Data[] = [];

  constructor(
    private API: ApiService,
    private RT: Router,
    private AR: ActivatedRoute,
  ) {

    /**
     * Cuando ya exista autenticacion realiza las peticiones.
     * de lo contrario solo inicia nuevamente el array
     * @author Martin Batun Tec.
    */
    this.API.update.subscribe((get: boolean) => {
      // this.data = [];
      if (!get || this.search) { return }
      this.get();

    });

    this.AR.queryParams.subscribe(
      (params: Params) => {
        if (params.search) {
          this.search = params.search
          this.data = [];
          this.get();
        }
      }
    );
  }

  get(): void {
    this.getArtist();
    this.getTracks();
    this.getAlbums();
    this.getPlayList();
  }

  ngOnInit(): void {
  }


  /**
   * Pide los artistas.
   * @author Martin Batun Tec.
  */
  getArtist(): void {
    this.API.get(`search?q=${this.search}&type=artist`).subscribe((data: { artists: { items: [] } }) => {
      if (this.data.filter(e => e.id == 1).length == 0) {
        const item = new Data(1, 'Artists', []);
        data.artists.items.forEach(e => {
          item.items.push(new Item(e['id'], e['name'], e['images']['length'] > 0 ? e['images'][0]['url'] : null))
        });
        this.data.push(item);
      }
    });
  }


  /**
   * Pide las pistas.
   * @author Martin Batun Tec.
  */
  getTracks(): void {
    this.API.get(`search?q=${this.search}&type=track`).subscribe((data: { tracks: { items: [] } }) => {
      if (this.data.filter(e => e.id == 2).length == 0) {
        const item = new Data(1, 'Tracks', []);
        data.tracks.items.forEach(e => {
          item.items.push(new Item(e['id'], e['name'], e['album']['images']['length'] > 0 ? e['album']['images'][0]['url'] : null, e['artists'][0]['name']))
        });
        this.data.push(item);
      }
    });
  }


  /**
   * Pide los albums.
   * @author Martin Batun Tec.
  */
  getAlbums(): void {
    this.API.get(`search?q=${this.search}&type=album`).subscribe((data: { albums: { items: [] } }) => {
      if (this.data.filter(e => e.id == 2).length == 0) {
        const item = new Data(1, 'Albums', []);
        data.albums.items.forEach(e => {
          item.items.push(new Item(e['id'], e['name'], e['images']['length'] > 0 ? e['images'][0]['url'] : null, e['artists'][0]['name']))
        });
        this.data.push(item);
      }
    });
  }

  /**
   * Pide los albums.
   * @author Martin Batun Tec.
  */
  getPlayList(): void {
    this.API.get(`search?q=${this.search}&type=playlist`).subscribe((data: { playlists: { items: [] } }) => {
      if (this.data.filter(e => e.id == 2).length == 0) {
        const item = new Data(1, 'PlayLists', []);
        data.playlists.items.forEach(e => {
          item.items.push(new Item(e['id'], e['name'], e['images']['length'] > 0 ? e['images'][0]['url'] : null))
        });
        this.data.push(item);
            console.log(this.data);
      }
    });
  }

}
