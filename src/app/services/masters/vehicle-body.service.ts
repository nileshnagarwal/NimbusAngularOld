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
    console.log(vehicleBody); 
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

  deleteVehicleBodyData(data){
    //We receive data object which is a part of the event object
    //passed by the event emitter of smart table. This data object
    //has the data of the field, out of which we can extract the
    //vehicle_body_id.
    let id = data['vehicle_body_id'];
    return this.http
      .delete(
        this.url+id+"/",
        { headers: this.header }
      );
  }
}
