import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css']
})
export class PokemonCardComponent implements OnInit {
  @Input()
  pokemon:any

  @Input()
  numero:number

  numeroNovo:any

  constructor() {
    this.pokemon = ""
    this.numero = 0
    this.numeroNovo = ""
  }

  pegarImagemPokemon(){
    const numeroFormatado = this.leadingZero(this.numero)
    this.numeroNovo = numeroFormatado
    return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${numeroFormatado}.png`



  }

  leadingZero(str:string | number):string{
    let x = String(str)
    while (x.length < 3){
    x = "0" + x
   }
    return x
  }


  ngOnInit(): void {
  }

}
