import { Component, OnInit } from '@angular/core';
import { cards } from './grid-mock';
import { Card } from './../../shared/models/card/card.model';

type Product = {
  name: string;
  description: string;
};
@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
})
export class GridComponent implements OnInit {
  cards: Card[];
  currentIndex = 0;

  products: Product[] = [
    { name: 'PS-4', description: 'The best gaming console' },
    { name: 'XBOX', description: 'The 2nd best gaming console' },
  ];

  constructor() {
    this.cards = cards;
  }

  ngOnInit(): void {}

  getProduct() {
    return {
      product: this.products[this.currentIndex],
    };
  }

  prevClick() {
    if (this.currentIndex === 0) {
      return;
    }
    this.currentIndex--;
    this.getProduct();
  }

  nextClick() {
    if (this.currentIndex === this.products.length - 1) {
      return;
    }
    this.currentIndex++;
    this.getProduct();
  }
}
