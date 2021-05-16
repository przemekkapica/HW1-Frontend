import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/model/movie';
import { MovieService } from 'src/app/services/movie.service';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-movies-view',
  templateUrl: './movies-view.component.html',
  styleUrls: ['./movies-view.component.scss'],
  providers: [MovieService, OrderService]
})
export class MoviesViewComponent implements OnInit {

  movies: Movie[] = [];

  constructor(private orderService: OrderService, private movieService: MovieService) { }

  ngOnInit(): void {
    this.getMovies();
    console.log(this.movies);
  }

  private getMovies() {
      this.movieService.getAllMovies().subscribe((data) => {
      console.log(data);
      
      this.movies = data;
    });
  }

  addNewOrder(movieId: number): void {
    this.orderService.addNewOrder(movieId);
    this.refresh();
  }

  getMovieIdByIndex(index: number) {
    return this.movies[index].id;
  }

  refresh(): void {
    window.location.reload();
  }
}
