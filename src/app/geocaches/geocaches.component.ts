import { Component, OnInit, Input } from '@angular/core';
import { Geocache } from '../geocache.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-geocaches',
  templateUrl: './geocaches.component.html',
  styleUrls: ['./geocaches.component.scss']
})
export class GeocachesComponent implements OnInit {
  @Input() childGeocaches;

  constructor(private router: Router){}

  // geocaches: Geocache[] = [];

  goToDetailPage(clickedGeocache: Geocache) {
     this.router.navigate(['geocaches', clickedGeocache.person]);
   };

  ngOnInit() {
  }

}
