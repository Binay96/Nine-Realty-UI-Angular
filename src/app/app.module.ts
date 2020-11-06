import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './Sidebar/sidebar/sidebar.component';
import { FrontpageComponent } from './frontpage/frontpage/frontpage.component';
import { RouterModule } from '@angular/router';
import { ResidentialPropertyComponent } from './Required-Components/residential-property/residential-property.component';
import { CommercialPropertyComponent } from './Commercia-Property/commercial-property/commercial-property.component';
import { ResidentalLeaseComponent } from './Residental-Lease/residental-lease/residental-lease.component';

import { HomeLoansComponent } from './home-loans/home-loans.component';
import { CommercialLeaseComponent } from './commercial-lease/commercial-lease.component';
import { InteriorComponent } from './interior/interior.component';
import { CorporateGiftingComponent } from './corporate-gifting/corporate-gifting.component';
import { ConstructionComponent } from './construction/construction.component';
import { RealestateConsultancesComponent } from './realestate-consultances/realestate-consultances.component';
import { ReranoComponent } from './rerano/rerano.component';
import { DisclaimerComponent } from './disclaimer/disclaimer.component';
import { HeadelementComponent } from './headelement/headelement.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    FrontpageComponent,
    HomeLoansComponent,
    CommercialLeaseComponent,
    InteriorComponent,
    CorporateGiftingComponent,
    ConstructionComponent,
    RealestateConsultancesComponent,
    ReranoComponent,
    DisclaimerComponent,
    HeadelementComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: 'residentialProperty', component: ResidentialPropertyComponent },
      { path: 'frontpage', component: FrontpageComponent },
      { path: '', redirectTo: '/frontpage', pathMatch: 'full' },
      { path: 'commercialProperty', component: CommercialPropertyComponent },
      { path: 'residentallease', component: ResidentalLeaseComponent },
      { path: 'commerciallease', component: CommercialLeaseComponent },
      { path: 'homeloans', component: HomeLoansComponent },
      { path: 'interior', component: InteriorComponent },
      { path: 'corporategifting', component: CorporateGiftingComponent },
      { path: 'construction', component: ConstructionComponent },
      { path: 'realestateconsultances', component: RealestateConsultancesComponent }
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
