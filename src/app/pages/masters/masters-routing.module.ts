import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MastersComponent } from './masters.component';
import { VehicleBodyComponent } from './vehicle-body/vehicle-body.component';

const routes: Routes = [{
  path: '',
  component: VehicleBodyComponent,
  children: [{
    path: 'vehicle-body',
    component: VehicleBodyComponent,
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MastersRoutingModule { }

export const routedComponents = [
  MastersComponent,
  VehicleBodyComponent,
];
