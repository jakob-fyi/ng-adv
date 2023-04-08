import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { UxButtonComponent } from './ux-button/ux-button.component';
import { UxSplitComponent } from './ux-split/ux-split.component';

@NgModule({
  imports: [CommonModule, MatToolbarModule, MatIconModule, MatButtonModule],
  declarations: [UxSplitComponent, UxButtonComponent],
  exports: [UxSplitComponent, UxButtonComponent],
})
export class UxControlsModule { }
