import { NgModule } from '@angular/core';
import { ThemeModule } from '../../@theme/theme.module';
import { MastersRoutingModule, routedComponents } from './masters-routing.module';
import { VehicleBodyService } from './../../services/masters/vehicle-body.service';

@NgModule({
  imports: [
    ThemeModule,
    MastersRoutingModule,
  ],
  declarations: [
    ...routedComponents,
  ],
  providers: [
    VehicleBodyService
  ],
})
export class MastersModule { }
