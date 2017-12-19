import { VehicleBodyService } from './../../../services/masters/vehicle-body.service';
import { Component, OnInit } from '@angular/core';
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
export class VehicleBodyReportComponent implements OnInit {

  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmCreate: true,
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

  constructor(private service: VehicleBodyService) {}

  ngOnInit() {
    this.service.getVehicleBody()
    .subscribe(response => {
      this.source.load(response.json());
    });
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
      console.log(event);
      this.service.deleteVehicleBody(event['data'])
        .subscribe(response => {});
    } else {
      event.confirm.reject();
    }
  }

  onAddConfirm(event): void {
    // Confirm if the user wants to add the data and
    // then call the service to add the data.
    if (window.confirm('Are you sure you want to add?')) {
      event.confirm.resolve();
      this.service.addVehicleBody(event['newData'])
        .subscribe(response => {
          this.service.getVehicleBody()
          .subscribe(responseGet => {
            this.source.load(responseGet.json());
          });
        });
    } else {
      event.confirm.reject();
    }
  }

  getLocalDataSource() {
    return this.source;
  }

  getSettings() {
    return this.settings;
  }

}
