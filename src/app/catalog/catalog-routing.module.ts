import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductOverviewComponent } from './product-overview/product-overview.component';
import { ProductSpecificationComponent } from './product-specification/product-specification.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {
    path: '',
    component: CategoryComponent,
    pathMatch: 'full',
  },
  {
    path: ':id/products',
    component: ProductsComponent,
    pathMatch: 'full'
  },
  {
    path: ':id/products/:productId/details',
    component: ProductDetailComponent,
    children: [
      {
        path: 'specifications',
        component: ProductSpecificationComponent
      },
      {
        path: 'overview',
        component: ProductOverviewComponent
      },
      {
        path: '',
        redirectTo: 'overview',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatalogRoutingModule { }
