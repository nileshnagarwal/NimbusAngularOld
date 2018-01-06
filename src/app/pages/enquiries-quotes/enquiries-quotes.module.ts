import { AgmCoreModule } from '@agm/core';
import { } from 'googlemaps';
import { NgModule } from '@angular/core';
import { ThemeModule } from '../../@theme/theme.module';
import { EnquiriesQuotesRoutingModule, routedComponents } from './enquiries-quotes-routing.module';
import { AutoCompleteModule } from 'primeng/primeng';

@NgModule({
  imports: [
    ThemeModule,
    EnquiriesQuotesRoutingModule,
    AutoCompleteModule,
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyCa_g_ssoDwW4RM0k6GpCk8oGIzjWoyDjY",
      libraries: ["places"]
    }),
  ],
  declarations: [
    ...routedComponents,
  ],
  providers: [
  ],  
})
export class EnquiriesQuotesModule { }
