import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  orders: AngularFirestoreCollection; 
  object:Object; 
fItems:any; 
  constructor(public afs:AngularFirestore) { 
      this.orders = this.afs.collection('orders');
  }

  logOrder(items,address,name,phone){
    this.fItems = items.map((obj) => {
        return Object.assign({}, obj); 
    })

    this.object = { 
      items: this.fItems,
      address: address,
      name: name, 
      phone: phone
    }
   
    console.log(this.fItems);
   this.orders.add(this.object); 
  }
}

