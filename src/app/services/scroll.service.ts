import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { isPlatformBrowser } from '@angular/common';
import { fromEvent, Observable, empty } from 'rxjs';
import { map, share } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ScrollService {

  public end: Observable<number>;

  constructor(
    @Inject(DOCUMENT) private document: any,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    if (isPlatformBrowser(this.platformId)) {
      this.end = fromEvent(window, 'scroll').pipe(
        map(e => {
          if (e.target['scrollingElement'].getBoundingClientRect().bottom - 1 < e.target['scrollingElement'].clientHeight) {
            return window.scrollY || this.document.documentElement.scrollTop;
          }
        }),
        share()
      );
    }
    else {
      //in non-browser environments, provide an empty observable so you can safely subscribe to scroll$
      this.end = empty();
    }
  }

}
