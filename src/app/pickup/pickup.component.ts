import { Component, OnInit } from '@angular/core';
import { PickupService } from './pickup.service';
import { Store } from './store';

@Component({
  selector: 'app-pickup',
  templateUrl: './pickup.component.html',
  styleUrls: ['./pickup.component.css']
})
export class PickupComponent implements OnInit {
  stores: Store[]; 

  constructor( private pickupService: PickupService) { }

  ngOnInit() {
    this.pickupService.getStores().subscribe(
      stores => {
        this.stores = stores;
      }
    )
    console.log(this.stores);
  }

}
