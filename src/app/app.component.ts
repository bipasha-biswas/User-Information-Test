import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentDate : any;
  navbarOpen : boolean = false;

  constructor(public datepipe: DatePipe) {
    this.currentDate = this.datepipe.transform((new Date), 'dd-MMMM-YY');
  }

  ngOnInit() {
    
  }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
}
