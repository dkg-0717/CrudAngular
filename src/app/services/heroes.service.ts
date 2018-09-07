import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Heroe } from '../interfaces/heroe.interface';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  heroesURL: string = 'https://heroesapp-d3530.firebaseio.com/heroes.json';

  constructor(private http: Http) { }

  nuevoHeroe(heroe: Heroe) {
    const body = JSON.stringify(heroe);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });

    return this.http.post( this.heroesURL, body, { headers })
    .pipe(map( res => {
      console.log(res.json());
      return res.json();
    }));
  }

  getHeroes() {
    return this.http.get(this.heroesURL)
    .pipe(map(data => {
      return data.json();
    }));
  }
}
