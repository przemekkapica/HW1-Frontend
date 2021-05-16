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
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
