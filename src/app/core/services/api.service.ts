import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  /* private headers = new Headers({
    'Content-Type': 'application/json',
    Accept: 'application/json'
  }); */
  private options = {
    headers: null,
    params: null
  };


  /* if (this.jwtService.getToken()) {
    headersConfig['Authorization'] = `Token ${this.jwtService.getToken()}`;
  } */
  private setHeaders(): HttpHeaders {
    const headersConfig = {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    };
    return new HttpHeaders(headersConfig);
  }

  private setRequestOptions(params: HttpParams) {
    this.options.headers = this.setHeaders();
    this.options.params = params;
    return this.options;
  }

  private formatErrors(error: any) {
    return throwError(error.error);
  }

  get(path: string, params?: HttpParams): Observable<any> {
   /*  return this.http.get(`${environment.apiUrl}${path}`, this.setRequestOptions(params))
      .pipe(catchError(this.formatErrors)); */
    return this.http.get(`${environment.apiUrl}${path}`, this.setRequestOptions(params));
  }

  put(path: string, body: Object = {}): Observable<any> {
    return this.http.put(
      `${environment.apiUrl}${path}`,
      body
    ).pipe(catchError(this.formatErrors));
  }

  post(path: string, body: Object = {}): Observable<any> {
    return this.http.post(
      `${environment.apiUrl}${path}`,
      body
    ).pipe(catchError(this.formatErrors));
  }

  delete(path): Observable<any> {
    return this.http.delete(
      `${environment.apiUrl}${path}`
    ).pipe(catchError(this.formatErrors));
  }

}
