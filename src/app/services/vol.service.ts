import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VolService {
  volUrl = "http://localhost:8081/api/vols"
  constructor(private http: HttpClient) { }

  addvol(vol: any) {
    return this.http.post<{ data: any }>(this.volUrl, vol)
  }

  getAllvols() {
    return this.http.get<{ data: any }>(this.volUrl)
  }

  getvolById(id: any) {
    return this.http.get<{ data: any }>(`${this.volUrl}/${id}`)
  }

  getvolByName(name: any) {
    return this.http.get<{ data: any }>(`${this.volUrl}/vol/${name}`)
  }

  deletevol(id: any) {

    return this.http.delete<{ data: any }>(`${this.volUrl}/${id}`)
  }

  updatevol(vol: any) {
    return this.http.put<{ data: any }>(`${this.volUrl}`,vol)
  }

}
