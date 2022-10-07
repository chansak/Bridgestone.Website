import { Route, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CheckingComponent} from '@module/admin/app/vehicleprod/checking/checking.component'
import { MatIconModule } from '@angular/material/icon';
import { NgxJsonViewerModule } from 'ngx-json-viewer';
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
    MatIconModule,
    NgxJsonViewerModule
  ]
})
export class CheckingModule {
  
 }
