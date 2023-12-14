import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OffreReservationService {

  OffreReservationUrl = "http://localhost:8081/api/offreReservation"
  constructor(private http: HttpClient) { }

  addOffreReservation(OffreReservation: any,id:number) {
    return this.http.post<{ data: any }>(this.OffreReservationUrl+"/"+id, OffreReservation)
  }

  getAllOffreReservationes() {
    return this.http.get<{ data: any }>(this.OffreReservationUrl)
  }

  getOffreReservationById(id: any) {
    return this.http.get<{ data: any }>(`${this.OffreReservationUrl}/${id}`)
  }

  deleteOffreReservation(id: any) {
    return this.http.delete<{ data: any }>(`${this.OffreReservationUrl}/${id}`)
  }

  updateOffreReservation(OffreReservation: any,id:any) {
    return this.http.put<{ data: any }>(`${this.OffreReservationUrl}`,OffreReservation)
  }
}
