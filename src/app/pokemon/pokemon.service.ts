import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { ApiService } from '../shared/services/api.service';
import { StateService } from '../shared/services/state.service';
import { PokemonItem } from './../shared/models/pokemon/pokemon.model';

@Injectable()
export class PokemonService {
  private BASE_URL = `https://pokeapi.co/api/v2/`;
  private selectedPokemons: PokemonItem[];

  constructor(
    private apiService: ApiService,
    private stateService: StateService
  ) { }

  getPokemons = (): Observable<PokemonItem[]> => {
    if (this.stateService.getPokemonList() === null) {
      return this.callAPI();
    } else {
      return this.callLocalStorage();
    }
  };

  callAPI = (): Observable<PokemonItem[]> => {
    const url = `pokemon?limit=100&offset=0`;
    return this.apiService.get(url, this.BASE_URL).pipe(
      //@ts-ignore
      tap((response) => this.stateService.setPokemonList(response.results)),
      map((response) => {
        //@ts-ignore
        return response.results;
      })
    );
  };

  callLocalStorage = (): Observable<PokemonItem[]> => {
    return of(this.stateService.getPokemonList());
  };

  updateSelectedPokemons = (pokemons: PokemonItem[]): void => {
    this.selectedPokemons = pokemons;
  };

  getSelectedPokemons = (): PokemonItem[] => {
    return this.selectedPokemons;
  };
}
