import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DestinationService {

  DestinationUrl = "http://localhost:8081/api/destinations"
  constructor(private http: HttpClient) { }



  addDestination(destination: FormData) {
    return this.http.post<{ data: any }>(this.DestinationUrl, destination);
}

  getAllDestinationes() {
    return this.http.get<{ data:any[] }>(this.DestinationUrl)
  }

  getDestinationById(id: any) {
    return this.http.get<{ data: any }>(`${this.DestinationUrl}/${id}`)
  }

  getDestinationByName(name: any) {
    return this.http.get<{ data: any }>(`${this.DestinationUrl}/destination/${name}`)
  }

  deleteDestination(id: any) {

    return this.http.delete<{ data: any }>(`${this.DestinationUrl}/${id}`)
  }

  updateDestination(destination: FormData) {
    return this.http.put<{ data: any }>(`${this.DestinationUrl}`,destination)
  }
}
