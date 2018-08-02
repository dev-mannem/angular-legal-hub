import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UtilService {

  constructor(private _http: HttpClient) { }

  invokeHttpGet(url: any): Observable<any> {
    return this._http.get(url)
    .map(response => {
      return response;
    })
    .catch(error => {
      return error;
    });
  }

  invokeHttpPost(object: any) {
    return this._http.post(object.url, object.payload, {
      headers: object.headers,
      responseType: object.responseType || 'json'
  })
  .catch(error => {
    return error;
  });
  }

  invokeHttpPut(object: any) {
    return this._http.put(object.url, object.payload, {
      headers: object.headers,
      responseType: object.responseType || 'json'
  })
  .catch(error => {
    return error;
  });
  }

  invokeHttpDelete(url: any) {
    return this._http.delete(url)
  .catch(error => {
    return error;
  });
  }

}
