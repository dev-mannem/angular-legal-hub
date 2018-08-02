import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  authFlag = false;

  constructor() {
    if (window.location.href.indexOf('login') > -1) {
      this.authFlag = true;
    }
  }

}
