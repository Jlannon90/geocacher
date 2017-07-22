import { Injectable } from '@angular/core';
import { Geocache } from './geocache.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class GeocacheService {

  geocaches: FirebaseListObservable<any[]>;

  constructor(private af: AngularFireDatabase) {
    this.geocaches = af.list('geocaches');
  }
  addGeocache(newGeocache: Geocache) {
    this.geocaches.push(newGeocache);
  }
  getGeocache() {
    return this.geocaches;
  }
  getGeocacheById(geocacheId: string){
    // console.log(this.af.object('geocaches/' + geocacheId))
    return this.af.object('geocaches/' + geocacheId);
  }

}
