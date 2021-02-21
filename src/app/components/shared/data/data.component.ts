import { Component, OnInit, Input } from '@angular/core';
import { Data } from 'src/app/interfaces/data';
import { interval } from 'rxjs';
import { takeWhile, tap } from 'rxjs/operators';

@Component({
  selector: 'data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  @Input() data: Data;

  constructor() { }

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
