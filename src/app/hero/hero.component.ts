import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
@Component({
  selector: 'jsh-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  public hero:Hero;

  constructor() { }

  ngOnInit() {
    this.hero = new Hero(
    'Batman',
    'Bruce Wayne',
    "One of the most iconic fictional characters in the world, Batman has dedicated his life to an endless crusade, a war on all criminals in the name of his murdered parents, who were taken from him when he was just a child. Since that tragic night, he has trained his body and mind to near physical perfection to be a self-made Super Hero. He's developed an arsenal of technology that would put most armies to shame. And he's assembled teams of his fellow DC Super Heroes, like the Justice League, the Outsiders and Batman, Incorporated.",
    'assets/batman.jpg'
  );
   }
   callHero() {
    alert(this.hero.name+ " (" + this.hero.alterEgo + ") has been called!" );
    }

}
