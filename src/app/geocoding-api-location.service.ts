import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { geoKey } from './api-keys';
import { Geocache } from './geocache.model';
import { GeocacheService } from './geocache.service';


@Injectable()
export class GeocodingApiLocationService {

  constructor(private http: Http, private geocacheService: GeocacheService) { }

  getByAddress(address: string) {
    return this.http.get("https://maps.googleapis.com/maps/api/geocode/json?address=" +address+ "&api_key=" +geoKey)
  }

  saveGeoAddress(name: string, address: string) {
    return this.http.get("https://maps.googleapis.com/maps/api/geocode/json?address=" +address+ "&api_key=" +geoKey)
    .subscribe(response => {
      let foundGeocache: Geocache;
      for(let cache of response.json().results) {
        foundGeocache = new Geocache(name, cache.formatted_address, cache.geometry.location.lat, cache.geometry.location.lng);
        this.geocacheService.addGeocache(foundGeocache);
      }
      console.log(name);
    });
  }

}
