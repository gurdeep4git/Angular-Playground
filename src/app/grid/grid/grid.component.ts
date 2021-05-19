import { Component, OnInit } from '@angular/core';
import { cards } from './grid-mock';
import { Card } from './../../shared/models/card/card.model';
@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
})
export class GridComponent implements OnInit {
  cards: Card[];
  constructor() {
    this.cards = cards;
  }

  ngOnInit(): void {}
}
