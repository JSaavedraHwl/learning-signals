import { HttpClient } from '@angular/common/http';
import { computed, Injectable, signal } from '@angular/core';
import { BehaviorSubject, map, Observable, of, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  private pokemonName = signal('');

  constructor(private http: HttpClient) {}

  // Getter para acceder al Signal
  get nameSignal() {
    return this.pokemonName;
  }

  // Setter para actualizar el Signal
  updatePokemonName(name: string) {
    this.pokemonName.set(name);
  }

  // Computed para obtener datos del Pokémon de forma reactiva
  pokemonData = computed(() => {
    const name = this.pokemonName();
    if (!name) {
      return null;
    }
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
  });
}
