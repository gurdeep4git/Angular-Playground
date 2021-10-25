import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllOrdersComponent } from './all-orders/all-orders.component';
import { SalesHeaderComponent } from "./sales-header/sales-header.component";
import { ShipOrdersComponent } from './ship-orders/ship-orders.component';

const routes: Routes = [
  {
    path: '',
    component: SalesHeaderComponent,
    children: [
      {
        path: 'all-orders',
        component: AllOrdersComponent
      },
      {
        path: 'ship-orders',
        component: ShipOrdersComponent
      },
      {
        path: '',
        redirectTo: 'all-orders',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalesRoutingModule { }
