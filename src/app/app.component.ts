import { Component } from '@angular/core';

@Component({
  selector: 'si-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  checkboxState = false;

  radioValue = 'primary';
}
