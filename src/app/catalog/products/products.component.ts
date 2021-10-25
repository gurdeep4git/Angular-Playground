import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CatalogService } from '../catalog.service';
import { Product } from 'src/app/shared/models/catalog';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, OnDestroy {

  products: Product[];
  categoryId: string;

  destroy$ = new Subject();

  constructor(private activatedRoute: ActivatedRoute, private catalogService: CatalogService) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      this.categoryId = params.get('id');
      this.getProductsByCategoryId(this.categoryId);
    })
  }

  private getProductsByCategoryId(categoryId: string) {
    this.catalogService.getProductsByCategoryId(categoryId)
      .pipe(takeUntil(this.destroy$))
      .subscribe((products: Product[]) => {
        this.products = products
      })
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete()
  }

}
