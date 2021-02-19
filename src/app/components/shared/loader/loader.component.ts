import { Component } from '@angular/core';
import { LoaderService } from '@ser/loader.service';

@Component({
  selector: 'loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent {

  active: boolean;
  logo: string;

  constructor(private LS: LoaderService) {
    this.LS.status.subscribe((status: boolean) => {
      this.active = status;
    })
  }

}
