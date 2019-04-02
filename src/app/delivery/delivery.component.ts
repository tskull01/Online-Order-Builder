import { Component, OnInit } from '@angular/core';
import { Item } from '../item'; 
import { OrderService } from '../order.service';
import { FirestoreService } from '../firestore.service';
@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.css']
})
export class DeliveryComponent implements OnInit {

  items:Item[]; 
  name:string = '';
  phone:string = '';
  address:string = ''; 
  states:string[] = [
   'Alabama',
'Alaska',
'Arizona',
'Arkansas',
'California',
'Colorado',
'Connecticut',
'Delaware',
'Florida',
'Georgia',
'Hawaii',
'Idaho',
'Illinois',
'Indiana',
'Iowa',
'Kansas',
'Kentucky',
'Louisiana',
'Maine',
'Maryland',
'Massachusetts',
'Michigan',
'Minnesota',
'Mississippi',
'Missouri',
'Montana',
'Nebraska',
'Nevada',
'New Hampshire',
'New Jersey',
'New Mexico',
'New York',
'North Carolina',
'North Dakota',
'Ohio',
'Oklahoma',
'Oregon',
'Pennsylvania',
'Rhode Island',
'South Carolina',
'South Dakota',
'Tennessee',
'Texas',
'Utah',
'Vermont',
'Virginia',
'Washington',
'West Virginia',
'Wisconsin',
'Wyoming'
    
  ];

  constructor(private _orderService: OrderService, private _firestoreService: FirestoreService) {
    this._orderService.myMethod$.subscribe((data) =>{
      this.items = data;  
    });
  
 }
  ngOnInit() {
    this.items = this._orderService.getData(); 
    console.log(this.items);
  }
sendOrder(){
  if(this.address != '' && this.name != '' && this.phone != '' ){
this._firestoreService.logOrder(this.items,this.address,this.name,this.phone); 
  } else {
    alert("Please complete the form")
  }
}
}
