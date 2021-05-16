import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrdersViewComponent } from './components/orders-view/orders-view.component';
import { HttpClientModule } from '@angular/common/http';
import { OrderService } from './services/order.service';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { MoviesViewComponent } from './components/movies-view/movies-view.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TabViewModule } from 'primeng/tabview';

@NgModule({
  declarations: [
    AppComponent,
    OrdersViewComponent,
    MoviesViewComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    TableModule,
    ButtonModule,
    TabViewModule
  ],
  providers: [OrderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
