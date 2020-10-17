import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './Sidebar/sidebar/sidebar.component';
import { FrontpageComponent } from './frontpage/frontpage/frontpage.component';
import { RouterModule } from '@angular/router';
import { ResidentialPropertyComponent } from './Required-Components/residential-property/residential-property.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    FrontpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: 'residentialProperty', component: ResidentialPropertyComponent},
      {path: 'frontpage', component: FrontpageComponent},
      { path: '',   redirectTo: '/frontpage', pathMatch: 'full'}
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
