import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutoListComponent } from './auto-list/auto-list.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AutoListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: AutoListComponent }]),
  ]
})
export class AutoModule { }
