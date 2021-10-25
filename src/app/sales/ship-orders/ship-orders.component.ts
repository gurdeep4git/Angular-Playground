import { Component, OnInit } from '@angular/core';
import { mergeMap, switchMap } from 'rxjs/operators';
import { SalesService } from '../sales.service';

@Component({
  selector: 'app-ship-orders',
  templateUrl: './ship-orders.component.html',
  styleUrls: ['./ship-orders.component.scss']
})
export class ShipOrdersComponent implements OnInit {

  data: any[];
  constructor(private salesService: SalesService) { }

  ngOnInit(): void { }



  getProductsData() {
    this.getProducts();
  }

  clearData() {
    this.data.length = 0;
  }

  private getProducts() {
    this.salesService.getCategories()
      .pipe(
        switchMap((categories: string[]) => this.salesService.getProductsByCategory(categories[3]))
      ).subscribe((response: any[]) => {
        this.data = response;
      });
  }

}
