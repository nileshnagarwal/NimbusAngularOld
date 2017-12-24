import { TransporterComponent } from './transporter/transporter.component';
import { TransporterViewComponent } from './transporter-view/transporter-view.component';
import { TransporterService } from './../../services/masters/transporter.service';
import { VehicleTypeService } from './../../services/masters/vehicle-type.service';
import { NgModule } from '@angular/core';
import { ThemeModule } from '../../@theme/theme.module';
import { MastersRoutingModule, routedComponents } from './masters-routing.module';
import { VehicleBodyService } from './../../services/masters/vehicle-body.service';
import { Ng2SmartTableModule } from 'ng2-smart-table';

@NgModule({
  imports: [
    ThemeModule,
    MastersRoutingModule,
    Ng2SmartTableModule,
  ],
  declarations: [
    ...routedComponents,
  ],
  providers: [
    VehicleBodyService,
    VehicleTypeService,
    TransporterService,
    TransporterComponent,
  ],
  entryComponents: [
    TransporterViewComponent,
  ],
})
export class MastersModule { }
