import { Component, OnInit } from '@angular/core';
import { Order } from '../../model/order';
import { OrderService } from '../../services/order.service';
import { DialogService } from 'primeng/dynamicdialog';
import { MenuItem} from 'primeng/api';

@Component({
  selector: 'app-orders-view',
  templateUrl: './orders-view.component.html',
  styleUrls: ['./orders-view.component.scss'],
  providers: [DialogService]
})
export class OrdersViewComponent implements OnInit {

  orders: Order[] = [];

  displayUpdateDialog: boolean = false;

  selectedOrderIndex: number = 0;

  constructor(private orderService: OrderService, public dialogService: DialogService) { }

  ngOnInit(): void {
    this.getOrders();
  }

  showUpdateDialog(index: number): void {    
    console.log(index);
      this.selectedOrderIndex = index;
      this.displayUpdateDialog = true;
  }

  hideUpdateDialog(): void {
    this.displayUpdateDialog = false;
  }

  private getOrders() {
      this.orderService.getOrders().subscribe((data) => this.orders = data);      
  }

  getOrderIdByIndex(index: number) {
    return this.orders[index].id;
  }

  deleteOrder(orderId: number) {
    this.orderService.deleteOrder(orderId);
  }

}
