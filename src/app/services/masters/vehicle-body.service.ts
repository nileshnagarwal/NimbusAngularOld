import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()
export class VehicleBodyService {

  constructor(private http: Http) {
    this.header = new Headers({ 'Content-Type': 'application/json' });
  }

  private header;   
  private url = 'http://127.0.0.1:8000/masters/vehiclebody/';

  addVehicleBody(vehicleBody){
    
    return this.http
      .post(
        this.url, 
        JSON.stringify(vehicleBody),
        { headers: this.header });
    
  }

  getVehicleBodyData(){
    return this.http
      .get(
        this.url,
        { headers: this.header }
      );
  }

}
