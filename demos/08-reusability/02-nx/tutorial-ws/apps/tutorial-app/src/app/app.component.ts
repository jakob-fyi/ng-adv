import { Component } from '@angular/core';

@Component({
  selector: 'tutorial-ws-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'tutorial-app';

  doClick() {
    console.log('You clicked the button!');
  }
}
