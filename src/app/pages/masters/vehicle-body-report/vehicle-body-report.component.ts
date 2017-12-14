import { VehicleBodyService } from './../../../services/masters/vehicle-body.service';
import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';


@Component({
  selector: 'ngx-vehicle-body-report',
  templateUrl: './vehicle-body-report.component.html',
  styles: [`
    nb-card {
      transform: translate3d(0, 0, 0);
    }
  `],
})
export class VehicleBodyReportComponent {

  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      body: {
        title: 'Vehicle Body',
        type: 'string',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private service: VehicleBodyService) {
    this.service.getVehicleBodyData()
      .subscribe(response => {
        this.source.load(response.json());
        console.log(response.json());
      });
    
  }
  


  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}
