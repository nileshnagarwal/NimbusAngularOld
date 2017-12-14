import { Component } from '@angular/core';
import { VehicleBodyService } from './../../../services/masters/vehicle-body.service';
import {NgForm} from '@angular/forms';


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

  addVehicleBody(vehicleBodyForm: NgForm){

    this.service.addVehicleBody(vehicleBodyForm.value)
      .subscribe(response => {});
    vehicleBodyForm.reset();
  }
}
