import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableComponent } from './table/table.component';
import { FormComponent } from './form/form.component';
import { Feature2Component } from './feature2/feature2.component';
import { Feature3Component } from './feature3/feature3.component';

const routes: Routes = [
  {
    path: 'table',
    component: TableComponent,
  },
  {
    path: 'form',
    component: FormComponent,
  },
  {
    path: 'feature2',
    component: Feature2Component,
  },
  {
    path: 'feature3',
    component: Feature3Component,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureRoutingModule { }
