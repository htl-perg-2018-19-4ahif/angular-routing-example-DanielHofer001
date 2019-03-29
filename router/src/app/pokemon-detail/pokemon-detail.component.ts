import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css']
})
export class PokemonDetailComponent implements OnInit {
  pokemonid: number = 0;
  pokemon:IPokemonDetails={abilities:[],name:''};
  constructor(private route: ActivatedRoute,private httpClient: HttpClient) {
    console.log('Created...');
  }

  async ngOnInit() {
    this.route.paramMap.subscribe(
      param => { this.pokemonid = parseInt(param.get('id')) });
    this.pokemon= (await this.httpClient.get<IPokemonDetails>('https://pokeapi.co/api/v2/pokemon/'+this.pokemonid).toPromise());
  }

}
interface IPokemonDetails{
  abilities:Ability[];
  name:string;
}
interface Ability{
  ability:Info;
}
interface Info{
  name:string;
}
