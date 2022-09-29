import { Route, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CheckingComponent} from '@module/admin/app/vehicleprod/checking/checking.component'
export const routes: Route[] = [
  {
      path     : '',
      component: CheckingComponent
  }
];
@NgModule({
  declarations: [CheckingComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class CheckingModule { }
