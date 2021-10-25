import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogRoutingModule } from './catalog-routing.module';
import { ProductsComponent } from './products/products.component';
import { CategoryComponent } from './category/category.component';
import { CatalogService } from "./catalog.service";
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductOverviewComponent } from './product-overview/product-overview.component';
import { ProductSpecificationComponent } from './product-specification/product-specification.component';

@NgModule({
  declarations: [ProductsComponent, CategoryComponent, ProductDetailComponent, ProductOverviewComponent, ProductSpecificationComponent],
  imports: [
    CommonModule,
    CatalogRoutingModule
  ],
  providers: [
    CatalogService
  ]
})
export class CatalogModule { }
