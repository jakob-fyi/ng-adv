import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { UxLibModule } from '@nx-mono-repo/ux-lib';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, UxLibModule],
  selector: 'nx-mono-repo-root',
  template: `
  <div>
    <h1>Welcome to {{ title }}!</h1>
    <ux-button label="Click Me" (onClicked)="clicked($event)"></ux-button>
  </div>`
  ,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ng-otherapp';

  clicked(evt: any) {
    console.log('msg from the button in other app:', evt);
  }
}
