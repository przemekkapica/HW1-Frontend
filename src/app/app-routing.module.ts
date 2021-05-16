import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DeveloperViewComponent } from './components/developer-view/developer-view.component';
import { MoviesViewComponent } from './components/movies-view/movies-view.component';
import { OrdersViewComponent } from './components/orders-view/orders-view.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    {
      path: '', component: DashboardComponent,
      children: [
        { path: 'movies', component: MoviesViewComponent },
        { path: 'orders', component: OrdersViewComponent },
        { path: 'dev', component: DeveloperViewComponent },
      ]
    }
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
