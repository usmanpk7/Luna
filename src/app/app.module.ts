import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { SidebarComponent } from './sidebar/sidebar.component';
import { YearsectionComponent } from './yearsection/yearsection.component';
import { MapsectionComponent } from './mapsection/mapsection.component';
import { CriminalactivityComponent } from './criminalactivity/criminalactivity.component';
import { InterrogationsectionComponent } from './interrogationsection/interrogationsection.component';
import { ExibitsectionComponent } from './exibitsection/exibitsection.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { OfficersOnPatrolComponent } from './officers-on-patrol/officers-on-patrol.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
  
    SidebarComponent,
    YearsectionComponent,
    MapsectionComponent,
    CriminalactivityComponent,
    InterrogationsectionComponent,
    ExibitsectionComponent,
    SearchbarComponent,
    OfficersOnPatrolComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
  ],
  providers: [], 
  bootstrap: [AppComponent]
})
export class AppModule { }
