import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Hero } from 'src/app/shared/models/hero/hero.model';

@Component({
  selector: 'app-hero-item',
  templateUrl: './hero-item.component.html',
  styleUrls: ['./hero-item.component.scss']
})
export class HeroItemComponent implements OnInit {

  private _hero: Hero = new Hero();

  // @Input()
  // get hero(): Hero {
  //   return this._hero;
  // }

  // set hero(hero: Hero) {
  //   this._hero.id = hero.id || 0;
  //   this._hero.name = hero.name || 'No Name';
  //   this._hero.abilities = hero.abilities.length !== 0 ? hero.abilities : [" No Ability"];
  //   this._hero.isSavingWorld = hero.isSavingWorld;
  // }


  constructor() { }

  ngOnInit(): void {
    //console.log('hero :>> ', this.hero);
  }

  // saveWorld(status: boolean): void {
  //   this.hero.isSavingWorld = status;
  //   this.saveWorldStatus();
  // }

  // saveWorldStatus() {
  //   return { status: this.hero.isSavingWorld };
  // }

  // ngOnChanges(changes: SimpleChanges) {

  // }

  showAlert(): void {
    alert("I am clicked")
  }

}
