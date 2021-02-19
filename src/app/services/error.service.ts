import { Injectable } from '@angular/core';
import { Location } from '@angular/common';
import { LoaderService } from './loader.service';


@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  constructor(
    public LC: Location,
    private LS: LoaderService
  ) { }


  /**
  * Verifica el typo del codigo y lo para para ejecutar una alerta.
  * @author Martin Batun Tec.
  */
  checkError(error: any): void {
    console.log(error)
    switch (error.status) {
      case 400:
        this.swal(error.error.mensaje);
        break;
      case 401:
        this.swal(error.error.error, true);
        break;
      case 404:
        this.swal(error.error.mensaje);
        break;
      default:
        this.swal('Error de conexion');
        break;
    }
  }

  /**
  * Ejecuta una alerta para mostrar el mensaje
  * @author Martin Batun Tec.
  */
  swal(msg: string, logout?: boolean): void {
    this.LS.status.next(false);
  }

}
