import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-developer-view',
  templateUrl: './developer-view.component.html',
  styleUrls: ['./developer-view.component.scss']
})
export class DeveloperViewComponent implements OnInit {

  rangeDates: Date[] = [];
  
  constructor() { }

  ngOnInit(): void {
  }

}
