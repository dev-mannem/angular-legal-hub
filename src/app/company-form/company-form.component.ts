import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { UtilService } from '../services/util.service';
import { CompanyDataService } from '../services/company-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-company-form',
  templateUrl: './company-form.component.html',
  styleUrls: ['./company-form.component.css']
})
export class CompanyFormComponent implements OnInit {

  public companyGroup: FormGroup;
  companyNameControls: FormControl;
  fullNameControls: FormControl;
  emailControls: FormControl;
  companyEmailControls: FormControl;
  addressControls: FormControl;
  cityControls: FormControl;
  stateAbbrevControls: FormControl;
  stateControls: FormControl;
  countryControls: FormControl;
  postalCodeControls: FormControl;
  universityControls: FormControl;
  urlControls: FormControl;
  phoneControls: FormControl;
  jobTitleControls: FormControl;
  @Output() editRecord: EventEmitter<any> = new EventEmitter();

  constructor(
    private builder: FormBuilder,
    private _util: UtilService,
    private _router: Router,
    private companyData: CompanyDataService
  ) { }

  ngOnInit() {
    console.log('::::::', this.companyData);
    this.companyGroup = this.builder.group({
      'companyName': ['', Validators.required],
      'fullName': ['', Validators.required],
      'email': ['', Validators.required],
      'companyEmail': ['', Validators.required],
      'address': ['', Validators.required],
      'city': ['', Validators.required],
      'stateAbbrev': ['', Validators.required],
      'state': ['', Validators.required],
      'country': ['', Validators.required],
      'postalCode': ['', Validators.required],
      'university': [''],
      'url': ['', Validators.required],
      'phone': ['', Validators.required],
      'jobTitle': ['', Validators.required]
    });
    this._setControls(this.companyGroup);
    if (this.companyData) {
      this.setFormData(this.companyData);
    }
  }

  SubmitCompanyDetails() {
    if (this.companyGroup.valid) {
      const data = this.companyGroup.value;
      const requestObject: any = {};
      this.companyData.company = data.companyName;
      this.companyData.fullName = data.fullName ;
      this.companyData.email = data.email ;
      this.companyData.companyEmail = data.companyEmail ;
      this.companyData.address = data.address ;
      this.companyData.city = data.city ;
      this.companyData.stateAbbrev = data.stateAbbrev;
      this.companyData.state = data.state ;
      this.companyData.country = data.country ;
      this.companyData.postalCode = data.postalCode ;
      this.companyData.university = data.university ;
      this.companyData.url = data.url ;
      this.companyData.phone = data.phone ;
      this.companyData.jobTitle = data.jobTitle ;

      if (this.companyData.companyId) {
        requestObject.payload = this.companyData;
        requestObject.url = 'http://localhost:8888/company/comp';
        this._util.invokeHttpPut(requestObject).subscribe(response => {
          this._router.navigate(['companies']);
        });
      } else {
        requestObject.payload = this.companyData;
        requestObject.url = 'http://localhost:8888/company/comp';
        this._util.invokeHttpPost(requestObject).subscribe(response => {
          this._router.navigate(['companies']);
        });
      }
    }
  }

  _setControls(form: FormGroup): void {
    const allFields: Object = form.controls;
    for (const controlKey of Object.keys(allFields)) {
        if (allFields[controlKey].controls) {
            this[controlKey + 'Controls'] = form.get(controlKey);
            this._setControls(allFields[controlKey]);
        } else {
            this[controlKey + 'Controls'] = form.get(controlKey);
        }
    }
}

  setFormData(data: CompanyDataService) {
    this.companyNameControls.setValue(data.company);
    this.fullNameControls.setValue(data.fullName);
    this.emailControls.setValue(data.email);
    this.companyEmailControls.setValue(data.companyEmail);
    this.addressControls.setValue(data.address);
    this.cityControls.setValue(data.city);
    this.stateAbbrevControls.setValue(data.stateAbbrev);
    this.stateControls.setValue(data.state);
    this.countryControls.setValue(data.country);
    this.postalCodeControls.setValue(data.postalCode);
    this.universityControls.setValue(data.university);
    this.urlControls.setValue(data.url);
    this.phoneControls.setValue(data.phone);
    this.jobTitleControls.setValue(data.jobTitle);
  }

}
