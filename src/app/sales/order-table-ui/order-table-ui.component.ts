import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { OrderStatus } from 'src/app/shared/enums';

@Component({
  selector: 'app-order-table-ui',
  templateUrl: './order-table-ui.component.html',
  styleUrls: ['./order-table-ui.component.scss']
})
export class OrderTableUiComponent implements OnInit {

  @Input() orders;
  @Input() searchText;
  @Output() markAsFulfilledClick = new EventEmitter<number>();
  @Output() checkboxChange = new EventEmitter<any>();
  orderStatus = OrderStatus;

  constructor() { }

  ngOnInit(): void { }

  onChange(e: any) {
    this.checkboxChange.emit(e);
  }

  markAsFulfilled(id: number) {
    this.markAsFulfilledClick.emit(id)
  }

}
