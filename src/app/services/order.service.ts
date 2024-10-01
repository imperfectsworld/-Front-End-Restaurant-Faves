import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from '../models/order';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  url:string = "https://localhost:7049/api/Order";
  constructor(private http:HttpClient) { }

  getAll():Observable<Order[]>{
    return this.http.get<Order[]>(this.url);
  }

  deleteOrder(id:number):Observable<void> {
    return this.http.delete<void>(this.url + `/${id}`);
  }
  
  addOrder(p:Order):Observable<Order>{
    return this.http.post<Order>(this.url, p);
  }
  

}
