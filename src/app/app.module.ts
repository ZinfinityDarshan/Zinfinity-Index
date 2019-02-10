import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import {RouterModule, Routes} from '@angular/router';
import { SvgBannerComponent } from './svg-banner/svg-banner.component';
import { NavComponent } from './nav/nav.component';
import { SectionServicesComponent } from './section-services/section-services.component';
import { InfoSectionComponent } from './info-section/info-section.component';
import { ReactiveFormsModule } from '@angular/forms';
import { environment } from '../environments/environment';
import { ContactService } from './contact.service';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    SvgBannerComponent,
    NavComponent,
    SectionServicesComponent,
    InfoSectionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, 'zinfinity-index'),
    AngularFirestoreModule.enablePersistence()
  ],
  providers: [
    ContactService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
