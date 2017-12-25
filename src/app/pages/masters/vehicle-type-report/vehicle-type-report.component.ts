import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { VehicleTypeService } from 'C:/Nilesh/Angular/NimbusAngular/src/app/common/services/masters/vehicle-type.service';

@Component({
  selector: 'ngx-vehicle-type-report',
  templateUrl: './vehicle-type-report.component.html',
  styles: [`
    nb-card {
      transform: translate3d(0, 0, 0);
    }
  `],
})
export class VehicleTypeReportComponent implements OnInit {

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
      vehicle: {
        title: 'Vehicle Type',
        type: 'string',
      },
      length: {
        title: 'Vehicle Length',
        type: 'number',
      },
      width: {
        title: 'Vehicle Width',
        type: 'number',
      },
      height: {
        title: 'Vehicle Height',
        type: 'number',
      },
      weight: {
        title: 'Payload Capacity',
        type: 'number',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private service: VehicleTypeService) {}

  ngOnInit() {
    this.service.getVehicleType()
    .subscribe(response => {
      this.source.load(response.json());
    });
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
      console.log(event);
      this.service.deleteVehicleType(event['data'])
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
      this.service.addVehicleType(event['newData'])
        .subscribe(response => {
          this.service.getVehicleType()
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
