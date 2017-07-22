import { Component, OnInit, Input } from '@angular/core';
import { Geocache } from '../geocache.model';
import { Router } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2/database';
import { GeocacheService } from '../geocache.service';

@Component({
  selector: 'app-geocaches',
  templateUrl: './geocaches.component.html',
  styleUrls: ['./geocaches.component.scss'],
  providers: [GeocacheService]
})
export class GeocachesComponent implements OnInit {
  @Input() childGeocaches;

  constructor(private router: Router, private geocacheService: GeocacheService){}
  savedGeocaches: FirebaseListObservable <any[]> = null;

  goToDetailPage(clickedGeocache: Geocache) {
     this.router.navigate(['geocaches', clickedGeocache.address]);
   };

   ngOnInit(){
     this.savedGeocaches = this.geocacheService.getGeocache();
   }

}
