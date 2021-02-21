import { Injectable } from '@angular/core';
import { HttpClient, HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse, HttpParams, HttpErrorResponse } from '@angular/common/http'
import { environment } from '@env/environment';
import { map, catchError } from 'rxjs/operators';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { LoaderService } from './loader.service';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }


  update = new BehaviorSubject(null);


  get(url: string, params?: HttpParams) {
    return this.httpClient.get(url, { params: params })
  }

  post(url: string, data: any) {
    return this.httpClient.post(url, data)
  }

  patch(url: string, data: any) {
    return this.httpClient.patch(url, data)
  }

  put(url: string, data: any) {
    return this.httpClient.put(url, data)
  }

  delete(url: string) {
    return this.httpClient.delete(url)
  }

}

// intercepta las llamadas a los endpoits para setear el token
@Injectable() export class HttpConfigInterceptor implements HttpInterceptor {

  constructor(private API: ApiService, private LS: LoaderService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const token: string = localStorage.getItem("spootify");
    if (token) {
      req = req.clone({ headers: req.headers.set('Authorization', 'Bearer ' + token) });
    }
    req = req.clone({ headers: req.headers.set('Accept', 'application/json') });
    req = req.clone({ headers: req.headers.set('Accept-Language', 'es-mx') });

    const url = `${environment.url}${req.url}`.replace(/([^:]\/)\/+/g, '$1');
    req = req.clone({ url });

    return next.handle(req).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          // console.log('event--->>>', event);
          this.LS.stop(1000);
        }
        return event;
      }),
      catchError((err: HttpErrorResponse) => {
        localStorage.clear();
        this.API.update.next(null);
        return throwError(err);
      })
    );
  }

}
