import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/model/movie';
import { MovieService } from 'src/app/services/movie.service';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-movies-view',
  templateUrl: './movies-view.component.html',
  styleUrls: ['./movies-view.component.scss']
})
export class MoviesViewComponent implements OnInit {

  movies: Movie[] = [
    {id: 1, name: 'film1', date: "2020-03-21", price: 12, ranking: 12, genre: 'comedy'},
    {id: 1, name: 'film2', date: "2020-03-21", price: 12, ranking: 12, genre: 'comedy'},
    {id: 1, name: 'film3', date: "2020-03-21", price: 12, ranking: 12, genre: 'comedy'},
  ];

  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
    this.getOrders();
    console.log(this.movies);
  }

  private getOrders() {
      // this.movieService.getOrders().subscribe((data) => {
      // console.log(data);
      
     //  this.orders = data;
    // });
  }

  addNewOrder(movieId: number): void {
    this.orderService.addNewOrder(movieId);
  }

  getMovieIdByIndex(index: number) {
    return this.movies[index].id;
  }
}
