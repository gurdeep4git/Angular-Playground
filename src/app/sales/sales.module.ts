import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { SalesRoutingModule } from './sales-routing.module';
import { SalesHeaderComponent } from './sales-header/sales-header.component';
import { AllOrdersComponent } from './all-orders/all-orders.component';
import { ShipOrdersComponent } from './ship-orders/ship-orders.component';
import { OrderTableUiComponent } from './order-table-ui/order-table-ui.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HighlightDirective } from './directives/highlight.directive';

import { SalesService } from "./sales.service"

@NgModule({
  declarations: [HighlightDirective, SalesHeaderComponent, AllOrdersComponent, ShipOrdersComponent, OrderTableUiComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    SalesRoutingModule
  ],
  providers: [SalesService]
})
export class SalesModule { }
