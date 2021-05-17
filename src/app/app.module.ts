import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { OrdersViewComponent } from './components/orders-view/orders-view.component';
import { HttpClientModule } from '@angular/common/http';
import { OrderService } from './services/order.service';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { MoviesViewComponent } from './components/movies-view/movies-view.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TabViewModule } from 'primeng/tabview';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { TabMenuModule } from 'primeng/tabmenu';
import { DeveloperViewComponent } from './components/developer-view/developer-view.component';
import { MovieService } from './services/movie.service';
import { CardModule } from 'primeng/card';
import { CalendarModule } from 'primeng/calendar';

@NgModule({
  declarations: [
    AppComponent,
    OrdersViewComponent,
    MoviesViewComponent,
    DashboardComponent,
    DeveloperViewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    TableModule,
    ButtonModule,
    TabViewModule,
    DynamicDialogModule,
    DialogModule,
    InputTextModule,
    FormsModule,
    TabMenuModule,
    CardModule,
    CalendarModule
  ],
  providers: [OrderService, MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
