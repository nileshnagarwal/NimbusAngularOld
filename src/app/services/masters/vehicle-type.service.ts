import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()
export class VehicleTypeService {

  constructor(private http: Http) {
    this.header = new Headers({ 'Content-Type': 'application/json' });
  }

  private header;   
  private url = 'http://127.0.0.1:8000/masters/vehicletype/';

  addVehicleType(vehicleType){
    console.log(JSON.stringify(vehicleType));
    return this.http
      .post(
        this.url,
        JSON.stringify(vehicleType),
        { headers: this.header });
    
  }

}
