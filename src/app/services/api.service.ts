import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions, URLSearchParams} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class WebAPI {
  LOCAL_CONFIG = {
    API_HOST: 'http://pokeapi.co/api/v1/'
  };

  constructor(private http: Http) {}

  getPokemon(search) {
    return this.http.get(this.LOCAL_CONFIG.API_HOST + `pokemon/${search}/`)
      .map(res => res.json());
  }

  getPokemonsList(opt) {
    const searchParams = new URLSearchParams();
     searchParams.set('limit', opt.limit ? opt.limit : 12);
     searchParams.set('offset', opt.offset ? opt.offset : 0);
     let params = new RequestOptions({
     search: searchParams
     });
    return this.http.get(this.LOCAL_CONFIG.API_HOST + `pokemon/`, params)
      .map(res => res.json());
  }
}
