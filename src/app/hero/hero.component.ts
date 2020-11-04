import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'jsh-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  public name = 'Aso';
  public cnt = 0;
  constructor() { }

  ngOnInit() {
  }
  sayHello() {
    alert('Hello ' + this.name);
  }
  cntShow(){
    this.cnt++;
    alert('Apasat de:' + this.cnt);
  }

}
