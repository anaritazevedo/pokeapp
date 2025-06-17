import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private api = 'https://pokeapi.co/api/v2/pokemon';

  constructor(private http: HttpClient) {}

  listarPokemons(offset: number, limit: number): Observable<any> {
    return this.http.get(`${this.api}?offset=${offset}&limit=${limit}`);
  }

  detalhesDoPokemon(nome: string): Observable<any> {
    return this.http.get(`${this.api}/${nome}`);
  }
}
