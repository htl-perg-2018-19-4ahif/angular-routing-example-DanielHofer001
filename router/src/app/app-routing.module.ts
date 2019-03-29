import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokemonComponent } from './pokemon/pokemon.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { HttpClientModule } from '@angular/common/http'; //!
import { FormsModule } from '@angular/forms'; //!

const routes: Routes = [
  { path: '', redirectTo: '/pokemons', pathMatch: 'full' },
  { path: 'pokemons', component: PokemonComponent },
  { path: 'pokemons/:id', component: PokemonDetailComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes), HttpClientModule, FormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
