import { Component } from '@angular/core';
import { PokemonService } from 'src/services/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent {

  totalResults:Array <any>;
  paga:number= 1;

  constructor(public pokemonService: PokemonService) {
    this.totalResults = new Array<any>()
  }
getUsers(){
  this.pokemonService.getArray().subscribe(() =>{
    console.log() 
  })
}

}