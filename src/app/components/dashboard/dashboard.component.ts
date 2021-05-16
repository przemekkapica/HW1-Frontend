import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  items: MenuItem[] = [];

  activeItem: MenuItem = {};

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.initializeMenuItems();
    
    this.getActiveMenuItem();
  }

  private getActiveMenuItem() {
    switch (this.router.url) {
      case '/movies':
        this.activeItem = this.items[0];
        break;
      case '/orders':
        this.activeItem = this.items[1];
        break;
      default:
        this.activeItem = this.items[2];
        break;
    }
  }

  private initializeMenuItems() {
    this.items = [
      { label: 'Movies', icon: 'pi pi-fw pi-list', routerLink: 'movies' },
      { label: 'Orders', icon: 'pi pi-fw pi-shopping-cart', routerLink: 'orders' },
      { label: 'Developer', icon: 'pi pi-fw pi-cog', routerLink: 'dev' },
    ];
  }
}
