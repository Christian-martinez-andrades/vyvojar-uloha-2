import { Ng2SmartTableModule } from 'ng2-smart-table';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SidebarModule, ToolbarModule } from '@syncfusion/ej2-angular-navigations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/elementos/home/home.component';
import { HeaderComponent } from './components/elementos/header/header.component';
import { FooterComponent } from './components/elementos/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { MatSelectModule } from '@angular/material/select';

import { MatListModule } from '@angular/material/list';

import { MatProgressBarModule } from '@angular/material/progress-bar';
import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbPaginationModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { FlatpickrModule } from 'angularx-flatpickr';


import { MatSidenavModule } from '@angular/material/sidenav';
import { I18nModule } from './i18n/i18n.module';
import { SelectLanguageComponent } from './components/elementos/select-language/select-language.component';


import {MatToolbarModule} from '@angular/material/toolbar';

import { faAward as faraward, faUserAlt as farUserAlt, faHome as farHome, faIndustry as farIndustry, faLeaf as farLeaf, faBoxes as farBoxes, faBars as farBars, faBroom as farBroom, faBiohazard as farBiohazard, faRecycle as farRecycle, faListAlt as farListAlt, faMapMarked as farMapMarked, faWarehouse as farWarehouse, faSnowplow as farSnowplow, faMap as farMap, faFileSignature as farFileSig, faBriefcase as farBriefcase, faBox, faBoxes } from '@fortawesome/free-solid-svg-icons';
import { SortDirective } from './directive/sort.directive';
import { ListEmployeeComponent } from './components/employee/list-employee/list-employee.component';
const useBing = true;
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    SelectLanguageComponent,
    SortDirective,
    ListEmployeeComponent,


  ],
  imports: [
    MatToolbarModule,
    MatListModule,
    MatProgressBarModule,
    MatSidenavModule,
    CommonModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ToolbarModule,
    SidebarModule,
    NgbModule,
    NgbPaginationModule,
    NgbAlertModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    NgbModalModule,
    BrowserAnimationsModule,
    I18nModule,
    MatSelectModule

  ],
  providers: [NgbActiveModal// { provide: MapAPILoader, deps: [], useFactory: BingMapServiceProviderFactory  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private library: FaIconLibrary) {
    library.addIcons(faraward, farUserAlt, farHome, farLeaf, farBars, farIndustry, farBroom, farBoxes, farBiohazard, farMapMarked, farRecycle, farWarehouse, farMap, farFileSig, farListAlt, farBriefcase, farSnowplow);
  }
}



