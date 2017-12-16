import { VehicleBodyReportComponent } from './../vehicle-body-report/vehicle-body-report.component';
import { Component } from '@angular/core';
import { VehicleBodyService } from './../../../services/masters/vehicle-body.service';
import {NgForm} from '@angular/forms';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'ngx-vehicle-body',
  templateUrl: './vehicle-body.component.html',
  styles: [`
    nb-card {
      transform: translate3d(0, 0, 0);
    }
  `],
})
export class VehicleBodyComponent {

  constructor(private service: VehicleBodyService){};

  ngOnInit() {
    this.service.getVehicleBody()
    .subscribe(response => {
      this.source.load(response.json());
    });
  }

  addVehicleBody(vehicleBodyForm: NgForm){
    this.service.addVehicleBody(vehicleBodyForm.value)
      .subscribe(response => {
        this.service.getVehicleBody()
        .subscribe(response => {
          this.source.load(response.json());
        });    
      });
    vehicleBodyForm.reset();
  }

  //The following section is for the reports section smart table
  reportInstance : VehicleBodyReportComponent = new VehicleBodyReportComponent(this.service);
  
  source = this.reportInstance.getLocalDataSource();

  settings = this.reportInstance.getSettings();

  onDeleteConfirm(event): void {
    this.reportInstance.onDeleteConfirm(event);
  }

  onAddConfirm(event): void {
    this.reportInstance.onAddConfirm(event);
  }
 
}
