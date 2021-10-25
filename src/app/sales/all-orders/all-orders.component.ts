import { AfterContentChecked, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { forkJoin, Observable, of, Subject } from 'rxjs';
import { debounceTime, delay, distinctUntilChanged, switchMap, takeUntil, tap } from 'rxjs/operators';
import { StoreProduct } from 'src/app/shared/models/catalog';
import { LoaderService } from 'src/app/shared/services/loader.service';
import { SalesService } from '../sales.service';

@Component({
  selector: 'app-all-orders',
  templateUrl: './all-orders.component.html',
  styleUrls: ['./all-orders.component.scss']
})
export class AllOrdersComponent implements OnInit, OnDestroy {

  destroy$ = new Subject();

  allOrders: StoreProduct[];
  allOrdersCopy: StoreProduct[] = [];
  selectedOrders = [];

  queryField: FormControl = new FormControl();
  searchText: string;

  constructor(private salesService: SalesService) {

  }

  ngOnInit(): void {
    this.getProducts();
    this.search();
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
    console.log("all orders destroyed")
  }

  private getProducts() {
    forkJoin(
      [
        this.salesService.getProducts(),
        this.salesService.getUsers()
      ]
    )
      .pipe(
        takeUntil(this.destroy$)
      )
      .subscribe((response: any) => {
        const products = response[0];
        this.allOrders = products;
        this.allOrdersCopy = [...products];
        this.salesService.updateAllOrdersCount(this.allOrdersCopy.length);

        const users = response[1];

        console.log('users=>', users)
      });
  }

  private search() {
    this.queryField.valueChanges
      .pipe(
        tap((query) => this.searchText = query),
        debounceTime(200),
        distinctUntilChanged(),
        switchMap(query => this.searchOrder(query))
      )
      .subscribe((filteredOrders) => {
        this.allOrdersCopy = filteredOrders;
      });
  }

  private searchOrder(text: string) {
    if (!text) {
      this.allOrdersCopy = [...this.allOrders];
      return of(this.allOrdersCopy)
    }

    text = text.toLocaleLowerCase();

    return of(this.allOrders.filter(order => {
      return order.title.toLocaleLowerCase().includes(text)
    }))
  }

  // markAsFulfilled(orderId: number) {
  //   const selectedOrder = this.allOrders.find((order) => order.id === orderId);
  //   selectedOrder.status = 1;
  // }


  markAsShipped(e: any) {
    if (e.target.checked) {
      this.selectedOrders.push(+e.target.value)
    } else {
      this.selectedOrders.pop()
    }
  }

  shipOrders() {
    for (let order of this.selectedOrders) {
      this.shipOrdersAndRemove(order);
    }

    this.salesService.updateAllOrdersCount(this.allOrdersCopy.length);
  }


  shipOrdersAndRemove(orderId: number) {
    const index = this.allOrdersCopy.findIndex((o) => o.id === orderId);
    if (index !== -1) {
      this.allOrdersCopy.splice(index, 1)
    }
  }

}
