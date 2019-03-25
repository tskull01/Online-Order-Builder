import { Component } from '@angular/core';
import { Item } from './item'; 
import { Router } from '@angular/router'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

router:String;
constructor(private route:Router){
this.router = route.url; 
}
}
