import { Component, OnInit } from '@angular/core';
import { pokemons } from './data/mockData';
import { Pokemon } from './data/pokemon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  pokemonsLoaded: boolean = false;
  pokemons!: Pokemon[];
  selectedPokemon!: Pokemon;

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  loadPokemons() : void {
    this.pokemonsLoaded = true;
    this.pokemons = pokemons;
  }

  setSelectedPokemon(pokemon: Pokemon) : void {
    this.selectedPokemon = pokemon;
  }
}