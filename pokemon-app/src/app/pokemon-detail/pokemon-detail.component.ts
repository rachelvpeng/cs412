import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from '../data/pokemon';

@Component({
  selector: 'pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})

export class PokemonDetailComponent implements OnInit {
  @Input() pokemons!: Pokemon[];

  selectedPokemon!: Pokemon;

  constructor() { }

  ngOnInit(): void { }

  setSelectedPokemon(pokemon: Pokemon) : void {
    this.selectedPokemon = pokemon;
  }
}
