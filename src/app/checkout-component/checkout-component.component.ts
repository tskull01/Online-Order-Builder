import { Component, OnInit, Input} from '@angular/core';
import { Item } from '../item'; 
import { OrderService } from '../order.service';

@Component({
  selector: 'app-checkout-component',
  templateUrl: './checkout-component.component.html',
  styleUrls: ['./checkout-component.component.css']
})
export class CheckoutComponentComponent implements OnInit {

  public items:Item[] = new Array(); 
  never:boolean = false; 
  total:number = 0; 
  @Input() value:any; 
  show:boolean = true; 

  constructor(private _orderService: OrderService) {
      this._orderService.myMethod$.subscribe((data) =>{
        this.items = data;  
      })
   }

  ngOnInit() {
    this.items = this._orderService.getData();
    this.getTotal(); 
  }

  getTotal(){
    this.items.forEach((elem) => {
      this.total += elem.price; 
    }); 
  }
  setShow(tf){
    this.show = tf; 
  }
}
