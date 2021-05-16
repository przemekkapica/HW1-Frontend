import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../model/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  moviesUrl = 'http://localhost:8080/api/movies/filter';

  constructor(private http: HttpClient) { }

  getFilteredMovies() {

  }

  getAllMovies(): Observable<Movie[]> {
    return this.http.post<Movie[]>(this.moviesUrl, {});
  }
}
