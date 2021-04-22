import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  url: string;

  constructor(public http: HttpClient) {
    this.url = 'http://localhost:3000';
  }

  post(apiRoute: string, body: any) {
    return this.http.post(`${this.url + apiRoute}`, body, {
      headers: this.getHttpHeaders(),
    });
  }

  get(apiRoute: string) {
    return this.http.get(`${this.url + apiRoute}`, {
      headers: this.getHttpHeaders(),
    });
  }

  put(apiRoute: string, body: any) {
    return this.http.put(`${this.url + apiRoute}`, body, {
      headers: this.getHttpHeaders(),
    });
  }

  delete(apiRoute: string) {
    return this.http.delete(`${this.url + apiRoute}`, {
      headers: this.getHttpHeaders(),
    });
  }

  getHttpHeaders(): HttpHeaders {
    const headersConfig = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Pragma: 'no-cache',
      'Accept-Language': 'en-US',
    };

    return new HttpHeaders(headersConfig);
  }
}
