import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gasolinera} from '../models/gasolinera.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GasolineraService {

  constructor(private http: HttpClient) {}

  getGasolineras(): Observable<Gasolinera> {
    return this.http.get<Gasolinera>('https://sedeaplicaciones.minetur.gob.es/ServiciosRESTCarburantes/PreciosCarburantes/EstacionesTerrestres/');
  }

}
