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

  addItem(name:String, description?:String){
   this.items.push(new Item(name, description))
  }
  buildBurger(name){
  this.burger = true;
  this.menu = false; 
    this.name = name; 
  }
  setDescription(obj:Object){
  this.desc = obj['arr'];
  this.burger = obj['val1'];
  this.menu = obj['val2'];
  this.addItem(this.name, this.desc); 
  }
  removeItem(item){
    this.items.splice(item,1); 
  }
}
