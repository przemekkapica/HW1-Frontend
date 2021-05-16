import { Component, OnInit } from '@angular/core';
import { Order } from '../../model/order';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-orders-view',
  templateUrl: './orders-view.component.html',
  styleUrls: ['./orders-view.component.scss']
})
export class OrdersViewComponent implements OnInit {

  orders: Order[] = [
    {id: 1, movieId: 1, date: "2020-03-21", netAmount: 12, discount: 12, gross: 20},
    {id: 1, movieId: 1, date: "2020-03-21", netAmount: 12, discount: 12, gross: 20},
    {id: 1, movieId: 1, date: "2020-03-21", netAmount: 12, discount: 12, gross: 20},
  ];

  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
    this.getOrders();
    console.log(this.orders);
  }

  private getOrders() {
      this.orderService.getOrders().subscribe((data) => {
      console.log(data);
      
     //  this.orders = data;
    });
  }

}
