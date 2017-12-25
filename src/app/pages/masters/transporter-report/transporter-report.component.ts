import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TransporterViewComponent } from './../transporter-view/transporter-view.component';
import { TransporterComponent } from './../transporter/transporter.component';
import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { TransporterService } from 'C:/Nilesh/Angular/NimbusAngular/src/app/common/services/masters/transporter.service';

@Component({
  selector: 'ngx-transporter-report',
  templateUrl: './transporter-report.component.html',
  styles: [`
    nb-card {
      transform: translate3d(0, 0, 0);
    }
  `],
})
export class TransporterReportComponent implements OnInit {

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
      transporter: {
        title: 'Transporter',
        type: 'string',
      },
      primary_mobile: {
        title: 'Primary Mobile',
        type: 'number',
      },
      primary_contact: {
        title: 'Primary Contact',
        type: 'string',
      },
      primary_person: {
        title: 'Contact Person',
        type: 'string',
      },
    },
    actions: {
      add : false,
      edit: false,
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(
    private service: TransporterService,
    private transporterComponent: TransporterComponent,
    private modalService: NgbModal,
  ) {}

  ngOnInit() {
    this.transporterComponent.refreshTable
      .subscribe(response => {
        this.service.getTransporter()
          .subscribe(responseGet => {
            this.source.load(responseGet.json());
          });
      });
    this.service.getTransporter()
      .subscribe(response => {
        this.source.load(response.json());
      });
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
      console.log(event);
      this.service.deleteTransporter(event['data'])
        .subscribe(response => {});
    } else {
      event.confirm.reject();
    }
  }

  // This function opens up a modal with the transporter details filled in.
  viewTransporter(event) {
    const activeModal = this.modalService.open(
      TransporterViewComponent,
      { size: 'lg', container: 'nb-layout' },
    );
    activeModal.componentInstance.transporterId = event['data']['transporter_id'];
  }

  getLocalDataSource() {
    return this.source;
  }

  getSettings() {
    return this.settings;
  }

}
