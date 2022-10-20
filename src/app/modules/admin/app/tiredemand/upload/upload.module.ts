import { Route, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'app/shared/shared.module';
import {UploadComponent} from '@module/admin/app/tiredemand/upload/upload.component';

export const routes: Route[] = [
  {
      path     : '',
      component:UploadComponent
  }
];


@NgModule({
  declarations: [UploadComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    SharedModule
  ]
})
export class UploadModule { }
