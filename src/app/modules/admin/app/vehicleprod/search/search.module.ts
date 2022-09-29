import { Route, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from '@module/admin/app/vehicleprod/search/search.component';

export const routes: Route[] = [
  {
      path     : '',
      component: SearchComponent
  }
];
@NgModule({
  declarations: [SearchComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class SearchModule { }
