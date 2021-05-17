import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../model/movie';
import { MovieRequest } from '../model/movie-request';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  moviesUrl = 'http://localhost:8080/api/movies/filter';

  constructor(private http: HttpClient) { }

  getFilteredMovies(movieRequest: MovieRequest): Observable<Movie[]> {
    return this.http.post<Movie[]>(this.moviesUrl, movieRequest);
  }

  getAllMovies(): Observable<Movie[]> {
    return this.http.post<Movie[]>(this.moviesUrl, {});
  }
}
