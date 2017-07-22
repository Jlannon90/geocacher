import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { GeocodingApiLocationService } from '../geocoding-api-location.service';
import { GeocacheService } from '../geocache.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
  providers: [ GeocodingApiLocationService, GeocacheService ]
})
export class AdminComponent implements OnInit {
  geocaches: any[]=null;

  constructor(private geocodingApiLocation: GeocodingApiLocationService) { }
  addAddress(address: string, name: string) {
    this.geocodingApiLocation.getByAddress(address).subscribe(response => {
      this.geocaches = response.json();
    });
    console.log(this.geocaches);
  }

  addLatLng(lat: string, lng: string, name: string) {
    this.geocodingApiLocation.getByLatLng(lat, lng).subscribe(response => {
      this.geocaches = response.json();
    });
  }

  saveAddress(address, name){
    this.geocodingApiLocation.saveGeoAddress(name, address);
    alert("Hi " + name + ". The following address, " + address + ", has been saved to the database.")
  }

  saveLatLng(lat, lng, name){
    this.geocodingApiLocation.saveGeoLatLng(name, lat, lng);
    alert("Hi " + name + ". The following address with a latitude of " + lat + " and longitude of " + lng + ", has been saved to the database.")
  }

  ngOnInit() {
  }

}
