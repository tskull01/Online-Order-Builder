import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Store } from './store';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PickupService {
storesCollection: AngularFirestoreCollection<Store>; 
stores: Observable<any[]>; 

  constructor(public afs: AngularFirestore) { 
    this.stores = this.afs.collection('locations').valueChanges();
  }

  getStores(){
    return this.stores; 
    }
}
