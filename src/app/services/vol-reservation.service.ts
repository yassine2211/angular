import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VolReservationService {

  volReservationUrl = "http://localhost:8081/api/volReservation"
  constructor(private http: HttpClient) { }

  addvolReservation(volReservation: any,id:any) {
    return this.http.post<{ data: any }>(this.volReservationUrl+"/"+id, volReservation)
  }

  getAllvolReservationes() {
    return this.http.get<{ data: any }>(this.volReservationUrl)
  }

  getvolReservationById(id: any) {
    return this.http.get<{ data: any }>(`${this.volReservationUrl}/${id}`)
  }

  deletevolReservation(id: any) {

    return this.http.delete<{ data: any }>(`${this.volReservationUrl}/${id}`)
  }

  updatevolReservation(volReservation: any) {
    return this.http.put<{ data: any }>(`${this.volReservationUrl}`,volReservation)
  }
}
