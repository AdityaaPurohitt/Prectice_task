import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Coin_task';
  price = 10;
  showPrice :boolean= false;
  getPrice(){
    this.showPrice= true
  }
}
