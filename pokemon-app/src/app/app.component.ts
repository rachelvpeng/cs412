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
  pokemonName1: any;
  pokemonName2: any;
  pokemonName3: any;

  constructor(private wxService: WxService) {}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  loadPokemons() : void {
    let pokemonNames: string[] = [this.pokemonName1, this.pokemonName2, this.pokemonName3];

    this.wxService.getPokemon(pokemonNames).subscribe(
      (response: Pokemon[]) => { 
        this.pokemons = response; 
        this.pokemonsLoaded = true;
      }
    )
  }
}