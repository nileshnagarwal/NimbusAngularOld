import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { TransporterService } from './../../../services/masters/transporter.service';

@Component({
  selector: 'ngx-transporter',
  templateUrl: './transporter-view.component.html',
  styles: [`
    nb-card {
      transform: translate3d(0, 0, 0);
    }
  `],
})

export class TransporterViewComponent implements OnInit {

  constructor(
    private service: TransporterService,
  ) {}

  ngOnInit() {
    this.service.getTransporterById(this.transporterId)
    .subscribe(response => {
      this.transporterForm.patchValue(response);
    });
  }

  transporterId: number;

  transporterForm: FormGroup = new FormGroup(
    {
      transporter: new FormControl('', []),
      primary_mobile: new FormControl('', []),
      primary_contact: new FormControl('', []),
      primary_person: new FormControl('', []),
      other_contact: new FormControl('', []),
      address: new FormControl('', []),
    },
  );

  // The following get functions are used to describe
  // properties which can be used for cleaner code in html file.

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

}
