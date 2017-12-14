import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'ngx-vehicle-type',
  templateUrl: './vehicle-type.component.html',
  styles: [`
    nb-card {
      transform: translate3d(0, 0, 0);
    }
  `],
})
export class VehicleTypeComponent {

  vehicleTypeForm = new FormGroup(
    {
      vehicleType : new FormControl('',[
        Validators.required,
        Validators.maxLength(20),
        Validators.minLength(5),
      ]),
      length: new FormControl('',[
        Validators.required,
        Validators.max(300),
      ]),
      width: new FormControl('',[
        Validators.required,
        Validators.max(30),
      ]),
      height: new FormControl('',[
        Validators.required,
        Validators.max(15),
      ]),
      weight: new FormControl('',[
        Validators.required,
        Validators.max(1000),
      ]),
    }
  )

  addVehicleType(vehicleTypeForm){};

  get vehicleType()
  {
    return this.vehicleTypeForm.get('vehicleType');
  }

  get length()
  {
    return this.vehicleTypeForm.get('length');
  }

  get width()
  {
    return this.vehicleTypeForm.get('width');
  }

  get height()
  {
    return this.vehicleTypeForm.get('height');
  }

  get weight()
  {
    return this.vehicleTypeForm.get('weight');
  }

  displayErrors(length){
    console.log(length.errors);
  }

}
