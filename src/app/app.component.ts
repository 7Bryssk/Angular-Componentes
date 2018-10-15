import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'meu-app';
  isVisible = true;
  varPipe1 = 5.3589;
  varPipe2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  varPipe3 = new Date(2017, 6, 7);
  varPipe4 = { "nome": "João da Silva" };
  varPipe5 = new Promise((resolve, reject) => {
    setTimeout(() => { resolve('TreinaWeb') }, 2000);
  });

  constructor() {
    setTimeout(() => { this.isVisible = false }, 1000)
  }

  handleClick(event) {
    console.log(event);
    alert(event);
  }
}
