import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
// import the face data
import { HEROES } from "../mock-heroes";
import { HeroService } from "../hero.service";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  // VARIABLES
  private heroes: Hero[]; // The service will call the HEROES for the Component, heroes = HEROES; is not needed anymore.
  private hero: Hero;
  private selectedHero: Hero;

  // In order to inject the HeroService, I write it inside the constructor parameters
  // Constructor is reserved for simple initialization (usually).
  constructor(private heroService: HeroService) { }

  /* Method used when object hero is selected */
  onSelect(hero:Hero): void {
    this.selectedHero = hero;
  } // End of onSelect()

  /* Methode to retrive the HEROES */
 /* getHeroes(): void {
    this.heroeService.getHeroes();
  } // End of getHeores()*/

 /* Methode to retrive the Observable HEROES */
  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
}

  // The getHeores() methode will be called in the ngOnInit() lifeciycle hook
  ngOnInit() {
    this.getHeroes();
  }
}
