import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
//import { EventEmitter } from 'protractor';
@Component({
  selector: 'jsh-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {
  selectedUniverse: string;
  public heros: Hero[];
  myString:string;
  @Output() heroSelected = new EventEmitter();
  constructor(private heroService: HeroService) { }

  changeUniverse (newUniverse){
    this.selectedUniverse = newUniverse;
  }
  ngOnInit() {
    this.selectedUniverse = 'all';
    this.heros = this.heroService.heros;
    this.myString = 'revnoeibvoeihrviheovoheroERVDFVsdcaecRV';
  }
  editHandler(id) {
    this.heroSelected.emit(id);
  }

}
