import { Component, Input, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';
import { OrderBy } from './../../shared/enums';
@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
})
export class FiltersComponent implements OnInit {
  orderBy = OrderBy;
  selectedOrder: OrderBy;

  constructor(private blogService: BlogService) {}

  ngOnInit(): void {
    this.selectedOrder = this.blogService.orderByProperty;
  }

  onOrderByChange(orderBy: OrderBy): void {
    this.selectedOrder = orderBy;
    this.blogService.orderByProperty = this.selectedOrder;
  }
}
