import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PricingComponent } from './pricing.component';
import { PricingRoutingModule } from './pricing-routing.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    PricingComponent
  ],
  imports: [
    CommonModule,
    PricingRoutingModule,
    SharedModule
  ]
})
export class PricingModule { }
