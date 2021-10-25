import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ProductDetails } from 'src/app/shared/models/catalog';
import { CatalogService } from '../catalog.service';

@Component({
  selector: 'app-product-overview',
  templateUrl: './product-overview.component.html',
  styleUrls: ['./product-overview.component.scss']
})
export class ProductOverviewComponent implements OnInit, OnDestroy {
  productId: string;
  productDetails: ProductDetails;

  destroy$ = new Subject();


  constructor(private activatedRoute: ActivatedRoute, private catalogService: CatalogService) { }

  ngOnInit(): void {
    this.activatedRoute.parent.params.subscribe(params => {
      this.productId = params['productId'];
      this.getProductDetails(this.productId);
    })
  }

  private getProductDetails(productId: string) {
    this.catalogService.getProductDetails(productId)
      .pipe(takeUntil(this.destroy$))
      .subscribe((productDetails: ProductDetails) => {
        this.productDetails = productDetails[0]
      })
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete()
  }


}
