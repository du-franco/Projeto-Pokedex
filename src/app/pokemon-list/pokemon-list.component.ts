import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../servicos/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {

  pokemons = []

  constructor(public pokemonService:PokemonService) {

  }

 ngOnInit() {
   this.listar()
 }

 listar(){
   this.pokemonService.pegarPokemon().subscribe({
     next:(resultado)=>{this.pokemons =resultado.results
                         console.log(this.pokemons)},
     error: (erro) =>console.error(erro),
     complete: () => console.info('completou')
   })
 }

}
