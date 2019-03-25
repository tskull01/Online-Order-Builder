import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CheckoutComponentComponent } from './checkout-component/checkout-component.component';
import { MainComponent } from '../app/main/main.component';

const routes: Routes = [
  { path: "" , component: MainComponent},
  { path: 'checkout', component: CheckoutComponentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ MainComponent, CheckoutComponentComponent ] 
