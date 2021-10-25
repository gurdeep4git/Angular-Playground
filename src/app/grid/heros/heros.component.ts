import { Component, OnInit } from '@angular/core';
import { Hero } from "./../../shared/models/hero/hero.model";

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.scss']
})
export class HerosComponent implements OnInit {
  heros: Hero[];
  superHero: Hero;
  constructor() {
    this.superHero = { 'id': 1, 'name': 'Mr.X', 'age': 60, 'abilities': ['Fly', 'Swim'], 'isSavingWorld': false }
  }

  ngOnInit(): void {
    // this.heros = [
    //   { 'id': 1, 'name': 'Mr.X', 'age': 60, 'abilities': ['Fly', 'Swim'], 'isSavingWorld': false },
    //   { 'id': 2, 'name': '', 'age': 25, 'abilities': [], 'isSavingWorld': true }
    // ]
  }

  // addNewHero() {
  //   const hero = new Hero();

  //   hero.id = Number(Math.random().toFixed(1));
  //   hero.name = "Spiderman";
  //   hero.age = 30;
  //   hero.abilities = ["Web", "Fight", "Jump"];
  //   hero.isSavingWorld = false;

  //   this.heros.push(hero)
  // }

  // showAlert(): void {
  //   alert("I am clicked")
  // }

}
