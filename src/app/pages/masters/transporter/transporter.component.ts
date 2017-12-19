import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TransporterReportComponent } from './../transporter-report/transporter-report.component';
import { TransporterService } from './../../../services/masters/transporter.service';

@Component({
  selector: 'ngx-transporter',
  templateUrl: './transporter.component.html',
  styles: [`
    nb-card {
      transform: translate3d(0, 0, 0);
    }
  `],
})
export class TransporterComponent implements OnInit {
  
  constructor(private service: TransporterService){};

  ngOnInit() {
    this.service.getTransporter()
    .subscribe(response => {
      this.source.load(response.json());
    });
  }

  transporterForm = new FormGroup(
    {
      transporter: new FormControl('',[
        Validators.required,
        Validators.maxLength(70),
        Validators.minLength(5),
      ]),
      primary_mobile: new FormControl('',[
        Validators.required,
        Validators.max(9999999999),
      ]),
      primary_contact: new FormControl('',[
        Validators.maxLength(255),
      ]),
      primary_person: new FormControl('',[
        Validators.maxLength(40),
      ]),
      other_contact: new FormControl('',[
        Validators.maxLength(255),
      ]),
      address: new FormControl('',[
      ]),
    }
  )

  addTransporter(transporterForm){
    this.service.addTransporter(transporterForm.value)
      .subscribe(response => {
        this.service.getTransporter()
        .subscribe(response => {
          this.source.load(response.json());
        });
      });
      transporterForm.reset();
  };

  //The following get functions are used to describe 
  //properties which can be used for cleaner code in html file.

  get transporter()
  {
    return this.transporterForm.get('transporter');
  }

  get primary_mobile()
  {
    return this.transporterForm.get('primary_mobile');
  }

  get primary_contact()
  {
    return this.transporterForm.get('primary_contact');
  }

  get primary_person()
  {
    return this.transporterForm.get('primary_person');
  }

  get other_contact()
  {
    return this.transporterForm.get('other_contact');
  }

  //The following section is for the reports section smart table
  reportInstance : TransporterReportComponent = new TransporterReportComponent(this.service);
  
  source = this.reportInstance.getLocalDataSource();

  settings = this.reportInstance.getSettings();

  onDeleteConfirm(event): void {
    this.reportInstance.onDeleteConfirm(event);
  }


  //The following function is only for debugging validation errors
  errorDisplay(transporterForm){
    console.log(transporterForm);
  }
 
}
