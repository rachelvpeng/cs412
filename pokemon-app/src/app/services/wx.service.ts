import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {wxConfig} from '../config/wxConfig';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class WxService {
  constructor(private http: HttpClient) { }

  getPokemon(pokemonNames: string[]): Observable<any> {
    return this.http.post(wxConfig.baseURL, {pokemons: pokemonNames},
      {observe: 'body', responseType: 'json'});
  }
}