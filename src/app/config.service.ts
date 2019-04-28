import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Config} from './config';
import {Observable} from 'rxjs';
import {Worddef} from './worddef';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor(private http: HttpClient) {
  }

  configUrl = 'http://localhost:8080/';

  getConfig(word: string) {
    return this.http.get<Worddef>(this.configUrl + word);
  }

  // this returns an observable instead of the JSON data
  getConfigResponse(): Observable<HttpResponse<Worddef>> {
    return this.http.get<Worddef>(
      this.configUrl, {observe: 'response'}
    );
  }

}
