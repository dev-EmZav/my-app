import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DBZFormComponent } from './components/form/form.component';
import { DGBZComponent } from './pages/main-page.component';
import { ListComponent } from './components/lst/lst.component';




@NgModule({
  declarations: [
    DGBZComponent,
    ListComponent,
    DBZFormComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    DGBZComponent
  ],
})
export class DbzModule { }
