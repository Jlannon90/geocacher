import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { GeocodingApiLocationService } from '../geocoding-api-location.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
  providers: [ GeocodingApiLocationService ]
})
export class AdminComponent implements OnInit {
  geocaches: any[]=null;

  constructor(private geocodingApiLocation: GeocodingApiLocationService) { }
  addAddress(address: string) {
    this.geocodingApiLocation.getByAddress(address).subscribe(response => {
        this.geocaches = response.json();
    });
    console.log(this.geocaches);
  }

  ngOnInit() {
  }

}
