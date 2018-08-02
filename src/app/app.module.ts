import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { DynamicModule } from 'ng-dynamic-component';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CompanyViewComponent } from './company-view/company-view.component';
import { ContactsViewComponent } from './contacts-view/contacts-view.component';
import { HttpClientModule } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { UtilService } from './services/util.service';
import { CompanyFormComponent } from './company-form/company-form.component';
import { CompanyDataService } from './services/company-data.service';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomePageComponent },
  { path: 'companies', component: CompanyViewComponent },
  { path: 'company', component: CompanyFormComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomePageComponent,
    CompanyViewComponent,
    ContactsViewComponent,
    CompanyFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    DynamicModule.withComponents([
      CompanyViewComponent,
      CompanyFormComponent,
      ContactsViewComponent
    ]),
  ],
  providers: [
    UtilService,
    CompanyDataService
  ],
  exports: [
    RouterModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
