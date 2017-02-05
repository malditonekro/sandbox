import { Component } from '@angular/core';
import { Hero } from '../../class/hero/hero.class';
import { HEROES } from '../../services/mocks/heroes';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent  { 
    title = 'Tour of Heroes'
    heroes = HEROES
    selectedHero: Hero

    onSelect(hero:Hero):void{
        this.selectedHero = hero
    }
}
