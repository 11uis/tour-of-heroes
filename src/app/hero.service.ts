import { Injectable } from '@angular/core';
import { HEROES } from "./mock-heroes";
import {Hero} from "./hero";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  // Asynchronous methode, wait to reply from http server
  getHeroes(): Observable<Hero[]> {
    return of(HEROES);
  }

/* This methode is synchronous
  getHeroes(): Hero[] {
    return HEROES;
  }*/
}
