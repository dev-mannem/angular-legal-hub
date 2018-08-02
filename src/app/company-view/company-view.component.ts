import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UtilService } from '../services/util.service';
import {  Router } from '@angular/router';
import { CompanyDataService } from '../services/company-data.service';

@Component({
  selector: 'app-company-view',
  templateUrl: './company-view.component.html',
  styleUrls: ['./company-view.component.css']
})
export class CompanyViewComponent implements OnInit {

  companyList: any;
  disable = true;

  constructor(
    private _util: UtilService,
    private _routes: Router,
    private companyData: CompanyDataService
  ) { }

  ngOnInit() {
    this._util.invokeHttpGet('assets/resp.json').subscribe(response => {
      this.companyList = response;
      console.log('companies::::', this.companyList);
    });
  }

  editCompany(data: any) {
    this.companyData.companyId = data.companyId ;
    this.companyData.company = data.company ;
    this.companyData.fullName = data.fullName ;
    this.companyData.email = data.email ;
    this.companyData.companyEmail = data.companyEmail ;
    this.companyData.address = data.email ;
    this.companyData.city = data.city ;
    this.companyData.stateAbbrev = data.stateAbbrev ;
    this.companyData.state = data.state ;
    this.companyData.country = data.country ;
    this.companyData.postalCode = data.postalCode ;
    this.companyData.university = data.university ;
    this.companyData.url = data.url ;
    this.companyData.phone = data.phone ;
    this.companyData.jobTitle = data.jobTitle ;
    this._routes.navigate(['company']);
  }

  addCompany() {
    this._routes.navigate(['company']);
  }

  deleteCompany(id: number) {
    const url = 'http://localhost:8888/company/comp' + id;
    this._util.invokeHttpDelete(url);
  }

}
