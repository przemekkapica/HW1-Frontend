import { Component, OnInit } from '@angular/core';
import { Order } from '../../model/order';
import { OrderService } from '../../services/order.service';
import { DialogService } from 'primeng/dynamicdialog';

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

  editedOrder: Order = {id: -1};

  constructor(private orderService: OrderService, public dialogService: DialogService) { }

  ngOnInit(): void {
    this.getOrders();
  }

  showUpdateDialog(index: number): void {    
    console.log(index);
    this.selectedOrderIndex = index;
    this.editedOrder = this.orders[index];
    this.displayUpdateDialog = true;
  }

  hideUpdateDialog(): void {
    this.displayUpdateDialog = false;
  }

  private getOrders() {
      this.orderService.getOrders().subscribe((data) => this.orders = data);      
  }

  submitOrderEdition(): void {
    this.hideUpdateDialog();
    this.updateOrder(this.editedOrder);
  }

  getOrderIdByIndex(index: number) {
    return this.orders[index].id;
  }

  deleteOrder(orderId: number) {
    this.orderService.deleteOrder(orderId);
    this.refresh();
  }

  updateOrder(order: Order) {
    this.orderService.updateOrder(order);
    this.refresh();
  }

  refresh(): void {
    window.location.reload();
  }

}
