import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeroComponent } from './hero/hero.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import { SpongebobPipe } from './spongebob.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    HeroListComponent,
    SpongebobPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
