import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckingComponent } from './checking/checking.component';
import { UploadComponent } from './upload/upload.component';
import { RouterModule } from '@angular/router';
import {vehicleprodRoutes} from '@module/admin/dashboards/vehicleprod/vehicleprod.routing'


@NgModule({
  declarations: [
    CheckingComponent,
    UploadComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(vehicleprodRoutes),
  ]
})
export class VehicleprodModule { }
