import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CompanyViewComponent } from '../company-view/company-view.component';
import { ContactsViewComponent } from '../contacts-view/contacts-view.component';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  dynamicComponent: any;

  constructor(private _router: Router) { }

  ngOnInit() {
    this.getCompanyDetails();
  }

  getCompanyDetails() {
    this.dynamicComponent = CompanyViewComponent;
  }

  getContactDetails() {
    this.dynamicComponent = ContactsViewComponent;
  }

}
