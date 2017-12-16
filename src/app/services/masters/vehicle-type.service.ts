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

  getVehicleType(){
    return this.http
      .get(this.url,
      { headers: this.header});
  }

  deleteVehicleType(data){
    //We receive data object which is a part of the event object
    //passed by the event emitter of smart table. This data object
    //has the data of the field, out of which we can extract the
    //vehicle_type_id.
    let id = data['vehicle_type_id'];
    return this.http
      .delete(
        this.url+id+"/",
        { headers: this.header }
      );
  }

}
