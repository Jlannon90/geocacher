import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { geoKey } from './api-keys';

@Injectable()
export class GeocodingApiLocationService {

  constructor(private http: Http) { }

  getByAddress(address: string) {
  return this.http.get("https://maps.googleapis.com/maps/api/geocode/json?address=" +address+ "&api_key=" +geoKey)
}

}
