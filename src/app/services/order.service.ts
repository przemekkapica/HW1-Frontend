import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { of } from 'rxjs/internal/observable/of';
import { catchError, retry, tap } from 'rxjs/operators';
import { Order } from '../model/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  
  ordersUrl = 'http://localhost:8080/api/orders';

  constructor(private http: HttpClient) { }

  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(this.ordersUrl).pipe(
      tap(_ => console.log('Fetched orders')),
      catchError(this.handleError<Order[]>('getOrders', [])));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); 
      console.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }

  deleteOrder(orderId: number) {
    console.log(this.ordersUrl + `/${orderId}`);
    this.http.delete(this.ordersUrl + `/${orderId}`).subscribe(() => console.log("Order deleted"));
  }

  addNewOrder(movieId: number) {
    var orderBody = {
      movieId: movieId,
      date: "2021-05-10",
      netAmount:  Math.floor(Math.random() * Math.floor(600)),
      discount: Math.floor(Math.random() * Math.floor(30)),
      gross: Math.floor(Math.random() * Math.floor(1000)),
    }
    this.http.post(this.ordersUrl, orderBody).subscribe(() => console.log("Order added"));
  }

  updateOrder(order: Order) {
    this.http.put(this.ordersUrl, order).subscribe(() => console.log("Order updated"));
  }

}
