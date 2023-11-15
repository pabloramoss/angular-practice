import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css']
})
export class PokedexComponent {
  private apiUrl = 'https://pokeapi.co/api/v2';

  constructor(private https: HttpClient) {
  }

  ngOnInit(): void {
    this.getPokemons();
  }

  getPokemons() {
    this.https.get(`${this.apiUrl}/pokemon?limit=151`).subscribe(
      (data) => {
        console.log(data);
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
