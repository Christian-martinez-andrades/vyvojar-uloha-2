import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from "@angular/router";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(
    private httpClient: HttpClient,
    private router: Router
  ) { }

  request<T>(
    method: string,
    uri: string,
    data: any,
    headers: any,
    auth: boolean = true,
    multipart: boolean = false,
  ): Observable<T> {
   
    if (auth) {
      const accessToken = localStorage.getItem('access_token');
      const jason = JSON.parse((localStorage.getItem('access_token')))
      const token = jason.access_token;
      headers['Authorization'] = 'Bearer ' + token;
    }

    headers = { headers };
    try {
      let httpResponse: Observable<any>;
      switch (method) {
        case 'GET':
          uri = this.serializeUrl(uri, data);
          httpResponse = this.httpClient.get<T>(uri, headers);
          break;
        case 'POST':
          httpResponse = this.httpClient.post<T>(uri, data, headers);
          break;
        case 'PUT':
          httpResponse = this.httpClient.put<T>(uri, data, headers);
          break;
        case 'DELETE':
          uri = this.serializeUrl(uri, data);
          httpResponse = this.httpClient.delete<T>(uri, headers);
          break;
      }

      const response = httpResponse;

      return httpResponse;
    } catch (error) {
      // Unauthorized Error 401
      if (error.status === 401) {
        localStorage.removeItem('access_token');
        this.router.navigate(['/'])
      }

      throw error;
    }

  }
  serializeUrl(uri, params) {
    const str = [];

    for (const p in params) {
      if (params.hasOwnProperty(p) && params[p] !== null) {
        str.push(encodeURIComponent(p) + '=' + encodeURIComponent(params[p]));
      }
    }

    if (str.length) {
      return uri + '?' + str.join('&');
    } else {
      return uri;
    }
  }
}
