import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
} from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RatingComponent implements OnChanges {
  @Input() rating: number;
  star: number;

  constructor() {}

  ngOnChanges() {
    this.calcRateCategory();
  }

  private calcRateCategory() {
    if (this.rating >= 0 && this.rating < 2) {
      this.star = 1;
    } else if (this.rating >= 2 && this.rating < 4) {
      this.star = 2;
    } else if (this.rating >= 4 && this.rating < 6) {
      this.star = 3;
    } else if (this.rating >= 6 && this.rating < 8) {
      this.star = 4;
    } else {
      this.star = 5;
    }
  }
}
