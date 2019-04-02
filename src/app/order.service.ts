import { Injectable } from '@angular/core';
import { Item } from './item'; 
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  myMethod$: Observable<any>;
  private myMethodSubject = new Subject<any>();
  items:Item[] = new Array();
  total:number; 

  constructor() {
    this.myMethod$ = this.myMethodSubject.asObservable(); 
   }
  receiveData(items){
    console.log(items); 
      this.items = items;
      this.myMethodSubject.next(this.items);
      this.prepareItems(this.items); 
  }
  getData(){
    return this.items; 
  }
  prepareItems(items){
    items.forEach(element => {
      if(element.description == undefined){
        element.description = ''; 
      }
    });
  }
}
