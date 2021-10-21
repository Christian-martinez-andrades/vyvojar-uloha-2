import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { RequestService } from './request.service';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ExternalCallService {
  EXTERNAL_URL = environment.appUrl;

  AÑADIDO = 'api'
  constructor(private requestService: RequestService, private httpClient: HttpClient,) { }

  getAll(): Observable<any> {
    return this.requestService.request<any>('GET', `${this.EXTERNAL_URL}${this.AÑADIDO}/positions`, {}, {}, false, false);;
  }

}