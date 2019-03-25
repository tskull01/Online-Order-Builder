import { Component } from '@angular/core';
import { Item } from '../item'; 
import { Router } from '@angular/router'
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  burger:boolean = false; 
  menu:boolean = true; 
  private items:Item[] = new Array();
  desc:String;
  name:String; 
  price:number;
  total:number = 0; 
  router:String;
  constructor(private route:Router){
  this.router = route.url; 
  }
    addItem(name:String, price:number, description?:String){
     this.items.push(new Item(name, price, description));
     this.total += price; 
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
    setMenu(value){
      this.menu = value; 
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
