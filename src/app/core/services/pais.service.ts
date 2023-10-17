import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PaisService {
  listaPaises: any = null;
  urlApiPaisRegion: string =
    'https://restcountries.com/v3.1/region/South%20America';
  constructor(private http: HttpClient) {}
  getData(): Observable<any> {
    return this.http.get<any>(this.urlApiPaisRegion);
  }
}
