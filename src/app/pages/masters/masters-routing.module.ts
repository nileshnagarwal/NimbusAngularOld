import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MastersComponent } from './masters.component';
import { VehicleBodyComponent } from './vehicle-body/vehicle-body.component';
import { VehicleBodyReportComponent } from './vehicle-body-report/vehicle-body-report.component';
import { VehicleTypeComponent } from './vehicle-type/vehicle-type.component';

const routes: Routes = [{
  path: '',
  component: VehicleBodyComponent,
  children: [{
    path: 'vehicle-body',
    component: VehicleBodyComponent,
    }],
  },{
  path: '',
  component: VehicleTypeComponent,
  children: [{
    path: 'vehicle-type',
    component: VehicleTypeComponent,
  }],
  },{
  path: '',
  component: VehicleBodyReportComponent,
  children: [{
    path: 'vehicle-body-report',
    component: VehicleBodyReportComponent,
    }],
  }]



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MastersRoutingModule { }

export const routedComponents = [
  MastersComponent,
  VehicleBodyComponent,
  VehicleTypeComponent,
  VehicleBodyReportComponent
];
