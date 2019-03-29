import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})

export class PokemonComponent implements OnInit {
  // https://pokeapi.co/api/v2/pokemon/

  pokemons: IPokemon[] = [];
  count: number = 0;
  search: string = '';
  constructor(private httpClient: HttpClient) {

  }
  async ngOnInit() {
    this.count = (await this.httpClient.get<IList>('https://pokeapi.co/api/v2/pokemon/').toPromise()).count;
    this.pokemons = (await this.httpClient.get<IList>('https://pokeapi.co/api/v2/pokemon/?limit=' + this.count).toPromise()).results;
    /*
    for (let i = 1; i <= this.pokemons.length; i++) {
      this.pokemons[i - 1].id = i;
    }*/
  }


}
interface IPokemon {
  name: string;
  url: string;
  id: number;
}
interface IList {
  results: IPokemon[];
  count: number;
}
