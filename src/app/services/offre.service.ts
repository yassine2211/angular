import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OffreService {

  
  offreUrl = "http://localhost:8081/api/offres"
  constructor(private http: HttpClient) { }

  addoffre(offre: FormData,id:any) {
    return this.http.post<{ data: any }>(this.offreUrl + "/" +id, offre)
  }

  getAlloffres() {
    return this.http.get<{ data: any }>(this.offreUrl)
  }

  getoffreById(id: any) {
    return this.http.get<{ data: any }>(`${this.offreUrl}/${id}`)
  }

  getoffreByName(name: any) {
    return this.http.get<{ data: any }>(`${this.offreUrl}/offre/${name}`)
  }

  deleteoffre(id: any) {
    return this.http.delete<{ data: any }>(`${this.offreUrl}/${id}`)
  }

  updateoffre(offre: FormData,id:any) {
    return this.http.put<{ data: any }>(`${this.offreUrl}/${id}`,offre)
  }
}

