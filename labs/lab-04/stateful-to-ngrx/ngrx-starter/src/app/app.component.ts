import { AsyncPipe, NgIf, NgStyle } from '@angular/common';
import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { MatDrawerMode, MatSidenavModule } from '@angular/material/sidenav';
import { RouterOutlet } from '@angular/router';
import { LoadingComponent } from './shared/loading/loading.component';
import { LoadingService } from './shared/loading/loading.service';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { SideNavService } from './shared/sidenav/sidenav.service';
import { SideNavFacade } from './state/sidenav.facades';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [RouterOutlet, NgStyle, MatSidenavModule, AsyncPipe, NgIf, NavbarComponent, SidebarComponent, LoadingComponent]
})
export class AppComponent {
  title = 'Food App';
  mode: MatDrawerMode = 'side';
  ms = inject(SideNavService);
  ls = inject(LoadingService);
  changeDetector = inject(ChangeDetectorRef);
  isLoading = this.ls.getLoading();

  nav = inject(SideNavFacade);
  sidenavMode = this.nav.getSideNavPosition();
  sidenavVisible = this.nav.getSideNavVisible();

  constructor() {
    this.ms.sideNavPosition.subscribe((currentMode) => { this.mode = currentMode });
  }

  ngAfterContentChecked(): void {
    this.changeDetector.detectChanges();
  }

  getWorbenchStyle() {
    let result = {};
    this.ms.sideNavVisible.subscribe((visible) => {
      result = visible
        ? {
          'padding-left': '10px',
        }
        : {};
    });
    return result;
  }
}
