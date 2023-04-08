import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SplitComponent } from './controls/split/split.component';

@NgModule({
  declarations: [SplitComponent],
  imports: [MatToolbarModule],
  exports: [SplitComponent],
})
export class UxControlsModule { }
