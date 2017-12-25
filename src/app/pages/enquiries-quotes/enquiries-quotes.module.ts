import { NgModule } from '@angular/core';
import { ThemeModule } from '../../@theme/theme.module';
import { EnquiriesQuotesRoutingModule, routedComponents } from './enquiries-quotes-routing.module';

@NgModule({
  imports: [
    ThemeModule,
    EnquiriesQuotesRoutingModule,
  ],
  declarations: [
    ...routedComponents,
  ],
  providers: [
  ],  
})
export class EnquiriesQuotesModule { }
