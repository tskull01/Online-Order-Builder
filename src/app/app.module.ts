import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { BurgerBuilderComponent } from './burger-builder/burger-builder.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatListModule} from '@angular/material/list';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatButtonModule} from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { OrderService } from './order.service';
import { PickupComponent } from './pickup/pickup.component';
import { MatRadioModule } from '@angular/material/radio';
import { FormsModule } from '@angular/forms';
import { DeliveryComponent } from './delivery/delivery.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { PickupService } from './pickup/pickup.service';



@NgModule({
  declarations: [
    AppComponent,
    BurgerBuilderComponent,
    routingComponents,
    MainComponent,
    PickupComponent,
    DeliveryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatListModule,
    DragDropModule,
    MatButtonModule,
    RouterModule,
    MatRadioModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  
  ],
  providers: [OrderService, PickupService],
  bootstrap: [AppComponent]
})
export class AppModule { }
