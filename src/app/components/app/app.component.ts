import { Component, OnInit } from '@angular/core';
import { Hero } from '../../class/hero/hero.class';
import { HeroService } from '../../services/hero/hero.service';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [ HeroService]
})

export class AppComponent implements OnInit { 

    title = 'Tour of Heroes'
    selectedHero: Hero
    heroes: Hero[];

    constructor(private heroService:HeroService){}

    ngOnInit(){
        this.getHeroes();
    }

    onSelect(hero:Hero):void{
        this.selectedHero = hero
    }

    getHeroes():void{
       this.heroService.getHeroes().then( heroes => this.heroes = heroes ).catch(error => console.log(error));
    }

    
}
