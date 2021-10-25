import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ApiService } from '../shared/services/api.service';

@Injectable()
export class SalesService {

  constructor(private apiService: ApiService) { }

  private allOrdersCount = new BehaviorSubject<number>(0);
  public allOrdersCount$ = this.allOrdersCount.asObservable();

  updateAllOrdersCount(count: number): void {
    this.allOrdersCount.next(count);
  }

  getProducts() {
    return this.apiService.get(`/products`, `https://fakestoreapi.com/`);
  }

  getUsers() {
    return this.apiService.get(`/users`, `https://fakestoreapi.com/`);
  }

  getCategories() {
    return this.apiService.get(`/products/categories`, `https://fakestoreapi.com/`);
  }

  getProductsByCategory(category: string) {
    return this.apiService.get(`/products/category/${category}`, `https://fakestoreapi.com/`);
  }

}
