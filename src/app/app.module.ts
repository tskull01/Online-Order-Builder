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


@NgModule({
  declarations: [
    AppComponent,
    BurgerBuilderComponent,
    routingComponents,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatListModule,
    DragDropModule,
    MatButtonModule,
    RouterModule
  ],
  providers: [OrderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
