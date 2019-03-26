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
      console.log(this.items); 
  }
  getData(){
    return this.items; 
  }
}
