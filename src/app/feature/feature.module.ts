import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureRoutingModule } from './feature-routing.module';
import { TableComponent } from './table/table.component';
import { FormComponent } from './form/form.component';
import { UiModuleModule } from '../ui-module/ui-module.module';
import { Feature2Component } from './feature2/feature2.component';
import { Feature3Component } from './feature3/feature3.component';


@NgModule({
  declarations: [
    TableComponent,
    FormComponent,
    Feature2Component,
    Feature3Component
  ],
  imports: [
    CommonModule,
    FeatureRoutingModule,
    UiModuleModule
  ]
})
export class FeatureModule { }
