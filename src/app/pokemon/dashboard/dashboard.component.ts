import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PokemonItem } from '../../shared/models/pokemon/pokemon.model';
import { FullscreenService } from '../../shared/services/fullscreen.service';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  isFullscreenShown$: Observable<boolean>;

  selectedPokemons: PokemonItem[] = [];

  constructor(
    private pokemonService: PokemonService,
    private fullscreenService: FullscreenService
  ) {
    this.isFullscreenShown$ = this.fullscreenService.isFullscreenShown$;
  }

  ngOnInit(): void {}

  makeTeam(): void {
    this.fullscreenService.show();
  }

  onFullscreenSubmit(): void {
    this.selectedPokemons = this.pokemonService.getSelectedPokemons();
    this.fullscreenService.hide();
  }
}
