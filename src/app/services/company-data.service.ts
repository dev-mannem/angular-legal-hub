import { Injectable } from '@angular/core';

@Injectable()
export class CompanyDataService {

  constructor() {

    // this.init();
   }

  companyId: number;
  company: string ;
  fullName: string ;
  email: string ;
  companyEmail: string ;
  address: string ;
  city: string ;
  stateAbbrev: string;
  state: string ;
  country: string ;
  postalCode: Number ;
  university: string ;
  url: string ;
  phone: string ;
  jobTitle: string ;

  init() {
    this.companyId = null ;
    this.company = '' ;
    this.fullName = '' ;
    this.email = '' ;
    this.companyEmail = '' ;
    this.address = '' ;
    this.city = '' ;
    this.stateAbbrev = '';
    this.state = '' ;
    this.country = '' ;
    this.postalCode = null ;
    this.university = '' ;
    this.url = '' ;
    this.phone = '' ;
    this.jobTitle = '' ;
  }

}
