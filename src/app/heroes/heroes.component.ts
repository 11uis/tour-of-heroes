import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
// import the face data
import { HEROES } from "../mock-heroes";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  // VARIABLES
  private heroes = HEROES;
  private hero: Hero;

  constructor() { }

  ngOnInit() {
  }

}
