import { Component } from '@angular/core';
import { Item } from './item'; 


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
burger:boolean = false; 
menu:boolean = true; 
private items:Item[] = new Array();
desc:String;
name:String; 
price:number;
total:number = 0; 

  addItem(name:String, price:number, description?:String){
   this.items.push(new Item(name, price, description));
   this.total += price; 
   console.log(this.total)
  }
  buildBurger(name, price){
  this.burger = true;
  this.menu = false; 
    this.name = name; 
    this.price = price; 
  }
  setDescription(obj:Object){
  this.desc = obj['arr'];
  this.burger = obj['val1'];
  this.menu = obj['val2'];
  this.addItem(this.name, this.price, this.desc); 
  }
  removeItem(item){
    for(let i = 0; i <= this.items.length; i++){
      if(item == this.items[i]){
        this.items.splice(i,1);
        this.total -= item.price; 
      }
    } 
  }
}
