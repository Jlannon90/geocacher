import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { geoKey } from './api-keys';
import { Geocache } from './geocache.model';
import { GeocacheService } from './geocache.service';


@Injectable()
export class GeocodingApiLocationService {

  constructor(private http: Http, private geocacheService: GeocacheService) { }

  saveGeoAddress(name: string, address: string) {
    return this.http.get("https://maps.googleapis.com/maps/api/geocode/json?address=" +address+ "&api_key=" +geoKey)
    .subscribe(response => {
      let foundGeocache: Geocache;
      for(let cache of response.json().results) {
        foundGeocache = new Geocache(name, cache.formatted_address, cache.geometry.location.lat, cache.geometry.location.lng);
        this.geocacheService.addGeocache(foundGeocache);
      }
    });
  }

  saveGeoLatLng(name: string, lat: string, lng: string) {
    return this.http.get("https://maps.googleapis.com/maps/api/geocode/json?latlng=" +lat+ "," +lng+ "&key=" +geoKey)
    .subscribe(response => {
      var lat  = response.json().results[0].geometry.location.lat;
      var lng =  response.json().results[0].geometry.location.lng;
      var address = response.json().results[0].formatted_address;
      var foundGeocache: Geocache = new Geocache(name, lat, lng, address);
      this.geocacheService.addGeocache(foundGeocache);
    });
  }

  // These were to just display the entered geocache on the page, but it's a bit redundant and cluttered
  // getByAddress(address: string) {
  //   return this.http.get("https://maps.googleapis.com/maps/api/geocode/json?address=" +address+ "&api_key=" +geoKey)
  // }
  //
  // getByLatLng(lat: string, lng: string) {
  //   return this.http.get("https://maps.googleapis.com/maps/api/geocode/json?latlng=" +lat+ "," +lng+ "&key=" +geoKey)
  // }


}
