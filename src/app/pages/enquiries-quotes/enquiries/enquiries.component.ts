import { Component, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { VehicleTypeService } from '../../../common/services/masters/vehicle-type.service';

@Component({
  selector: 'ngx-enquiries',
  templateUrl: './enquiries.component.html',
  
  styleUrls: ['./enquiries.component.css'],
})
export class EnquiriesComponent {

  constructor(private service: VehicleTypeService) {}

  statusOptions: string[] = [
    'Finalised Order',
    'Quote Required',
  ];

  text: string;

  results: string[];

  vehicleTypeResults: string[];

  vehicleTypeOptions: string[];

  loadTypeOptions: string[] = [
    'ODC',
    'Normal',
    'Part',
    'Container',
  ];


  searchStatus(event) {
    this.results = [];
        for (let i = 0; i < this.statusOptions.length; i++) {
            const statusQuery = this.statusOptions[i];
            if (statusQuery.toLowerCase().includes(event.query.toLowerCase())) {
                this.results.push(statusQuery);
            }
        }
  }

  searchLoadType(event) {
    this.results = [];
        for (let i = 0; i < this.loadTypeOptions.length; i++) {
            const statusQuery = this.loadTypeOptions[i];
            if (statusQuery.toLowerCase().includes(event.query.toLowerCase())) {
                this.results.push(statusQuery);
            }
        }
  }

  searchVehicleType(event) {    
    this.service.getVehicleType()
      .map(response => response.json())
        .subscribe(response => {
          this.vehicleTypeResults = [];
          this.vehicleTypeOptions = response;
          for (let i = 0; i < this.vehicleTypeOptions.length; i++) {
            const statusQuery = this.vehicleTypeOptions[i];
            if (statusQuery['vehicle'].toLowerCase().includes(event.query.toLowerCase())) {
                this.vehicleTypeResults.push(statusQuery['vehicle']);
            }
          }
        }
      );
    
  }

  enquiriesForm = new FormGroup({
    status: new FormControl('', []),
    loadType: new FormControl('', [
      Validators.required,
    ]),
    vehicleType: new FormControl('', [
      Validators.required,
    ]),
    vehicleBody: new FormControl('', []),
    enquiryId: new FormControl('',[
      Validators.required,
    ]),
    length: new FormControl('',[
      Validators.required,
    ]),
    width: new FormControl('',[
      Validators.required,
    ]),
    height: new FormControl('',[
      Validators.required,
    ]),
    weight: new FormControl('',[
      Validators.required,
    ]),
    source: new FormControl('', [
      Validators.required,
    ]),
    destination: new FormControl('', [
      Validators.required,
    ]),
    return: new FormControl('', []),
    specialReq: new FormControl('', []),
    loadingDate: new FormControl('', []),
  });

}
