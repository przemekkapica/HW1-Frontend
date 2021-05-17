import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/model/movie';
import { MovieRequest } from 'src/app/model/movie-request';
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

  rangeDates: Date[] = [];
  displayFilterDialog: boolean = false;

  startDate: string | null = null;
  endDate: string | null = null;
  nameKeyword: string | null = null;
  genre: string | null = null;
  minimumRanking: number | null = null;

  constructor(private orderService: OrderService, private movieService: MovieService) { }

  ngOnInit(): void {
    this.getMovies();
  }

  private getMovies() {
    this.movieService.getAllMovies().subscribe((data) => 
      this.movies = data
    );
  }

  filterMovies() {
    let movieRequest: MovieRequest = {
      start: this.startDate,
      end: this.endDate,
      subName: this.nameKeyword,
      genre: this.genre,
      ranking: this.minimumRanking,
    }
    this.movieService.getFilteredMovies(movieRequest).subscribe((data) =>
      this.movies = data
    );
    this.hideFilterDialog();
  }

  showFilterDialog(): void {    
    this.displayFilterDialog = true;
  }

  hideFilterDialog(): void {
    this.displayFilterDialog = false;
  }

  addNewOrder(movieId: number): void {
    this.orderService.addNewOrder(movieId);
    // this.refresh();
  }

  getMovieIdByIndex(index: number) {
    return this.movies[index].id;
  }

  refresh(): void {
    window.location.reload();
  }
}
