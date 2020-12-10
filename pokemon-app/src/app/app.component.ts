import { Component, OnInit } from '@angular/core';
import {WxService } from './services/wx.service';
import { Pokemon } from './data/pokemon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  pokemonsLoaded: boolean = false;
  pokemons: Pokemon[] = [];
  selectedPokemon!: Pokemon;

  constructor(private wxService: WxService) {}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  loadPokemons() : void {
    this.wxService.getPokemon("butterfree").subscribe(
      (response: Pokemon) => { 
        console.log(response);
        this.pokemons.push(response);   // hard coded duplication to provide a list for *ngFor implementation
        this.pokemons.push(response);
        this.pokemons.push(response);
        console.log(this.pokemons);
        this.pokemonsLoaded = true;
      }
    )
  }

  setSelectedPokemon(pokemon: Pokemon) : void {
    this.selectedPokemon = pokemon;
  }
}