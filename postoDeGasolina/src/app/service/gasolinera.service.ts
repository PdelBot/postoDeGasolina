import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GasolinaResponse } from '../models/gasolinera.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GasolineraService {

  constructor(private http: HttpClient) {}

  getGasolineras(): Observable<GasolinaResponse> {
    return this.http.get<GasolinaResponse>('https://sedeaplicaciones.minetur.gob.es/ServiciosRESTCarburantes/PreciosCarburantes/EstacionesTerrestres/');
  }

}
