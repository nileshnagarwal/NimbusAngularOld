import { VehicleBodyReportComponent } from './../vehicle-body-report/vehicle-body-report.component';
import { Component } from '@angular/core';
import { VehicleBodyService } from 'C:/Nilesh/Angular/NimbusAngular/src/app/common/services/masters/vehicle-body.service';
import {NgForm} from '@angular/forms';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'ngx-vehicle-body',
  templateUrl: './vehicle-body.component.html',
  styles: [`
    nb-card {
      transform: translate3d(0, 0, 0);
    }
  `],
})
export class VehicleBodyComponent implements OnInit {

  constructor(private service: VehicleBodyService) {}

  ngOnInit() {
    this.service.getVehicleBody()
    .subscribe(response => {
      this.source.load(response.json());
    });
  }

  addVehicleBody(vehicleBodyForm: NgForm) {
    this.service.addVehicleBody(vehicleBodyForm.value)
      .subscribe(response => {
        this.service.getVehicleBody()
        .subscribe(responseGet => {
          this.source.load(responseGet.json());
        });
      });
    vehicleBodyForm.reset();
  }

  // The following section is for the reports section smart table
  reportInstance: VehicleBodyReportComponent = new VehicleBodyReportComponent(this.service);
  source = this.reportInstance.getLocalDataSource();

  settings = this.reportInstance.getSettings();

  onDeleteConfirm(event): void {
    this.reportInstance.onDeleteConfirm(event);
  }

  onAddConfirm(event): void {
    this.reportInstance.onAddConfirm(event);
  }
}
