import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../shared/services/api.service';
import { Category } from "../shared/models/catalog";
import { filter, map } from 'rxjs/operators';

@Injectable()
export class CatalogService {

  constructor(private apiService: ApiService) { }

  getCategories(): Observable<any> {
    return this.apiService.get(`/categories`);
  }

  getProductsByCategoryId(categoryId: string): Observable<any> {
    return this.apiService.get(`/products?categoryId=${categoryId}`)
  }

  getProductDetails(productId: string): Observable<any> {
    return this.apiService.get(`/productDetails?productId=${productId}`)
  }
}
