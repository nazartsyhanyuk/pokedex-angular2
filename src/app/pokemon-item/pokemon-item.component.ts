import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-pokemon-item',
  templateUrl: './pokemon-item.component.html',
  styleUrls: ['pokemon-item.component.scss']
})
export class PokemonItemComponent {
  @Input() pokemon: {};

  constructor() {}


}
