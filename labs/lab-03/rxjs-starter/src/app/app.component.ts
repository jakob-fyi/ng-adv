import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { SidenavService } from './shared/sidenav/sidenav.service';
import { MatDrawerMode, MatSidenavModule } from '@angular/material/sidenav';
import { AsyncPipe, NgStyle } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [NavbarComponent, SidebarComponent, RouterOutlet, MatSidenavModule, NgStyle, AsyncPipe]
})
export class AppComponent {
  sideNav = inject(SidenavService);
  mode: MatDrawerMode = 'side';

  getWorbenchStyle() {
    let result = {};
    this.sideNav.sideNavVisible.subscribe((visible) => {
      result = visible
        ? {
          'padding-left': '10px',
        }
        : {};
    });
    return result;
  }
}
