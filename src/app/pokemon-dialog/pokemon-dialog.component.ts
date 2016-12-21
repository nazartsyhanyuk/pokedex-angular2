import {Component, OnInit} from '@angular/core';
import {MdDialogRef} from "@angular/material";

@Component({
  selector: 'app-pokemon-dialog',
  templateUrl: './pokemon-dialog.component.html',
  styleUrls: ['./pokemon-dialog.component.css']
})
export class PokemonDialogComponent implements OnInit{
  ngOnInit(): void {
    this.catchParameters(this.pokemon);
  }

  public pokemon: {};
  constructor(public dialogRef: MdDialogRef<PokemonDialogComponent>) { }

  catchParameters(pokemon) {
    let actualParameters = ['attack', 'defence', 'height', 'speed', 'exp', 'hp'];
    pokemon.parameters = [];
    for (let key in pokemon) {
      actualParameters.forEach((item)=> {
        if (key == item) {
          pokemon.parameters.push({
            key: item,
            value: pokemon[key]
          });
        }
      })
    }
    console.log(pokemon);
    this.pokemon = pokemon;
  }

}
