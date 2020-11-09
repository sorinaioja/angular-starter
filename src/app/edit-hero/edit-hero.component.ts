import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Hero } from '../hero'; // import adaugat
import { HeroService } from '../hero.service';

@Component({
  selector: 'jsh-edit-hero',
  templateUrl: './edit-hero.component.html',
  styleUrls: ['./edit-hero.component.css']
})
export class EditHeroComponent implements OnInit {
  @Input() heroId;
  @Output() close = new EventEmitter();
  hero: Hero;

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.hero = this.heroService.getHero(this.heroId);
  }
  saveHero() {
  this.close.emit();
}

}
