import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Geocache } from '../geocache.model';

@Component({
  selector: 'app-geocache-details',
  templateUrl: './geocache-details.component.html',
  styleUrls: ['./geocache-details.component.scss']
})
export class GeocacheDetailsComponent implements OnInit {
  geocachePerson: string = null;

  constructor(private route: ActivatedRoute, private location: Location) {}

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.geocachePerson = urlParameters['person'];
    });
  }

}
