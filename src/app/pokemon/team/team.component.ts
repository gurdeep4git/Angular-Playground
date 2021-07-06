import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { OrderBy } from '../../shared/enums';
import { PokemonItem } from '../../shared/models/pokemon/pokemon.model';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss'],
})
export class TeamComponent implements OnInit {
  @ViewChild('search') search: ElementRef;

  pokemons: PokemonItem[];

  selectedPokemons: PokemonItem[];
  filteredPokemons: PokemonItem[];

  isSelectAllChecked: boolean = false;
  selectedCount: number = 0;

  orderBy = OrderBy;

  order: OrderBy = OrderBy.Ascending;

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.getPokemons();
  }

  getPokemons() {
    this.pokemonService
      .getPokemons()
      .pipe(catchError((_) => of(null)))
      .subscribe((pokemons) => {
        this.pokemons = pokemons;
        this.filteredPokemons = pokemons;
        this.sortPokemons(this.order);
      });
  }

  sortPokemons(order: OrderBy) {
    if (order === OrderBy.Ascending) {
      this.filteredPokemons = this.filteredPokemons.sort((a, b) =>
        a.name > b.name ? 1 : -1
      );
    } else {
      this.filteredPokemons = this.filteredPokemons.sort((a, b) =>
        a.name < b.name ? 1 : -1
      );
    }
  }

  toggleOrderBy() {
    this.order === OrderBy.Ascending
      ? (this.order = OrderBy.Descending)
      : (this.order = OrderBy.Ascending);

    this.sortPokemons(this.order);
  }

  onSearch() {
    const query = this.search.nativeElement.value.toLowerCase().trim();
    if (query.length < 3) {
      this.filteredPokemons = this.pokemons;
    }
    if (query.length >= 3) {
      this.filteredPokemons = this.pokemons.filter((p) =>
        p.name.toLowerCase().includes(query)
      );
    }
    if (this.filteredPokemons.length !== 0) this.updateSelectAll();
  }

  selectAllChange(e): void {
    this.isSelectAllChecked = e.target.checked;
    this.filteredPokemons.forEach((pokemon) => {
      pokemon.isSelected = this.isSelectAllChecked;
    });

    this.updateSelectedPokemons();
    this.pokemonService.updateSelectedPokemons(this.selectedPokemons);
  }

  onCheckboxChange(e: any, pokemon: PokemonItem): void {
    pokemon.isSelected = e.target.checked;
    this.updateSelectAll();
    this.updateSelectedPokemons();
    this.pokemonService.updateSelectedPokemons(this.selectedPokemons);
  }

  updateSelectAll(): void {
    this.isSelectAllChecked = this.filteredPokemons.every(
      (pokemon: PokemonItem) => {
        return pokemon.isSelected == true;
      }
    );
  }

  updateSelectedPokemons() {
    this.selectedPokemons = [];

    this.filteredPokemons.forEach((p) => {
      if (p.isSelected) this.selectedPokemons.push(p);
    });

    this.updateSelectedCount();
  }

  updateSelectedCount() {
    this.selectedCount = this.selectedPokemons.length;
  }

  deleteSelectedPokemon(name: string): void {
    this.selectedPokemons = this.selectedPokemons.filter(
      (p) => p.name !== name
    );

    const pokemonToDelete: PokemonItem = this.filteredPokemons.find((p) => {
      return p.name == name;
    });
    pokemonToDelete.isSelected = false;

    this.updateSelectedCount();
    this.updateSelectAll();
    this.pokemonService.updateSelectedPokemons(this.selectedPokemons);
  }
}
