import { AfterViewChecked, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { SalesService } from '../sales.service';

@Component({
  selector: 'app-sales-header',
  templateUrl: './sales-header.component.html',
  styleUrls: ['./sales-header.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SalesHeaderComponent implements OnInit, AfterViewChecked {

  allOrdersCount$: Observable<number>;

  constructor(private salesService: SalesService, private changeDedectionRef: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.allOrdersCount$ = this.salesService.allOrdersCount$;
  }

  ngAfterViewChecked(): void {
    this.changeDedectionRef.detectChanges();
  }

}
