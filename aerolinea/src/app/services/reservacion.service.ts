import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Reservacion } from '../interfaces/Reservacion';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 
    'Access-Control-Allow-Origin':'*',
    'Authorization':'authkey',
    'userid':'1'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ReservacionService {
  base: string = 'http://localhost:3000';

  constructor(private http: HttpClient) { 
    
  }

  getReservacions(): Observable<Reservacion[]>{
    return this.http.get<Reservacion[]>(this.base +'/reservacion', httpOptions);
  }
  getReservacion(id: string): Observable<Reservacion>{
    return this.http.get<Reservacion>(this.base +'/reservacion/${id}', httpOptions)
  }
  createReservacion(reservacion: Reservacion): Observable<Reservacion>{
    return this.http.post<Reservacion>(this.base +'/reservacion/create', reservacion, httpOptions)
  }
    
  updateReservacion(id: string, reservacion: Reservacion): Observable<Reservacion>{
    return this.http.put<Reservacion>('/reservacion/update/${id}', reservacion)
  }
  deleteReservacion(id: string ): Observable<Reservacion>{
    return this.http.delete<Reservacion>('/reservacion/delete/${id}')
  }
}
