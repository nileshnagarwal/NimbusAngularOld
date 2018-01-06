import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AutoCompleteModule } from 'primeng/primeng';

@Component({
  selector: 'ngx-enquiries',
  templateUrl: './enquiries.component.html',
  styles: [`
    nb-card {
      transform: translate3d(0, 0, 0);
    }
  `],
})
export class EnquiriesComponent {

  constructor() {}

  statusOptions: string[] = [
    'Finalised Order',
    'Quote Required',
  ];
  
  text: string;

  results: string[];

  search(event) {
    this.results = [];
        for(let i = 0; i < this.statusOptions.length; i++) {
            let statusQuery = this.statusOptions[i];
            if(statusQuery.toLowerCase().includes(event.query.toLowerCase())) {
                this.results.push(statusQuery);
            }
        }
  }
  
  enquiriesForm = new FormGroup({
    googlePlaces: new FormControl('', []),
    status: new FormControl('', []),
  })

}
