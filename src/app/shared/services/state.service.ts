import { Injectable } from '@angular/core';
import { PokemonItem } from '../models/pokemon/pokemon.model';
import { WebStorage } from '../utilities/web-storage';
import { SignUp } from './../models/auth/auth.model';

@Injectable({
  providedIn: 'root',
})
export class StateService {
  private readonly storage: WebStorage;

  private readonly user = 'loggedin_user';
  private readonly pokemonList = 'pokemon_list';

  constructor() {
    this.storage = new WebStorage();
  }

  clearAll(): void {
    this.storage.clearAll();
  }

  setLoggedInUser(user: SignUp) {
    this.storage.setData(this.user, user);
  }

  getLoggedInUser(): SignUp {
    return this.storage.getData(this.user) || null;
  }

  setPokemonList(pokemons: PokemonItem[]) {
    this.storage.setData(this.pokemonList, pokemons);
  }

  getPokemonList(): PokemonItem[] {
    return this.storage.getData(this.pokemonList) || null;
  }
}
