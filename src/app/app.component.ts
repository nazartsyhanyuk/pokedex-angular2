import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {WebAPI} from './services/api.service';
import {MdDialog, MdDialogRef, MdDialogConfig} from "@angular/material";
import {PokemonDialogComponent} from "./pokemon-dialog/pokemon-dialog.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['app.component.scss'],
  providers: [WebAPI]
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
    this.getPokemons();
  }
  pokemons = [];
  pokemonPictureLink:string = `https://veekun.com/dex/media/pokemon/dream-world/`;
  searchQuery: string;
  limit: number = 12;
  offset: number = 0;
  activeProgress = false;
  dialogRef: MdDialogRef<PokemonDialogComponent>;


  constructor(private webAPI: WebAPI, public dialog: MdDialog, public viewContainerRef: ViewContainerRef) {}

  getPokemon(search) {
    this.activeProgress = true;
    this.webAPI.getPokemon(search)
      .subscribe(pokemon=> {
        this.activeProgress = false;
        pokemon.picture = `${this.pokemonPictureLink}${pokemon.national_id}.svg`;
        this.showPokemonInfo(pokemon);
        this.searchQuery = '';
      })
  }

  getPokemons(offset?) {
    this.activeProgress = true;
    let options = {
      limit: 12,
      offset: offset ? offset : 0
    };
    return this.webAPI.getPokemonsList(options)
      .subscribe(items=> {
        items.objects.map((pokemon)=> {
          pokemon.picture = `${this.pokemonPictureLink}${pokemon.national_id}.svg`;
          this.pokemons.push(pokemon);
        });
        this.offset += this.limit;
        },
        ()=> {},
        ()=> {
          this.activeProgress = false;
        })
  }

  showPokemonInfo(pokemon) {
    this.disableScrolling();
    let config = new MdDialogConfig();
    config.viewContainerRef = this.viewContainerRef;
    this.dialogRef = this.dialog.open(PokemonDialogComponent, config);
    this.dialogRef.componentInstance.pokemon = pokemon;
    this.dialogRef.afterClosed().subscribe(()=> {
      this.dialogRef = null;
      this.enableScrolling();
    });
  }

  loadMore() {
    this.getPokemons(this.offset);
  }

  disableScrolling(){
  let x=window.scrollX;
  let y=window.scrollY;
  window.onscroll=function(){window.scrollTo(x, y);};
}

  enableScrolling(){
  window.onscroll=function(){};
}

}
