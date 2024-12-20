import { Component, effect, inject } from '@angular/core';
import { DataServiceService } from './data-service.service';
import { Observable, of, tap } from 'rxjs';

@Component({
  selector: 'app-signal-service-component',
  templateUrl: './signal-service-component.component.html',
  styleUrl: './signal-service-component.component.scss'
})
export class SignalServiceComponentComponent {
  pokemonName: string = '';
  pokemonData: any = null; // Almacena los datos del Pokémon en el TS

  constructor(public dataService: DataServiceService) {
    // Actualiza los datos del Pokémon en tiempo real
    effect(() => {
      const dataObservable = this.dataService.pokemonData();
      if (dataObservable) {
        dataObservable.subscribe((data) => {
          this.pokemonData = data;
        });
      }
    });
  }

  searchPokemon() {
    this.dataService.updatePokemonName(this.pokemonName);
  }
}
