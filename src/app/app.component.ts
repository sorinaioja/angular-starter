import { Component } from '@angular/core';

@Component({
  selector: 'jsh-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngSuperHeroes';
  selectedHeroForEdit: number; // proprietatea adaugata

  setEditHero(heroId) {
    this.selectedHeroForEdit = heroId;
  }
  closeEdit() {
    this.selectedHeroForEdit = null;
  }
}
