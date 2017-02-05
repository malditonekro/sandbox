import { Component, OnInit } from '@angular/core'
import { Hero } from '../../class/hero/hero.class'
import { HeroService } from '../../services/hero/hero.service';
@Component({
    moduleId:module.id,
    selector: 'dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
    heroes:Hero[];
    constructor(private heroservice:HeroService){

    }
    ngOnInit(){
        this.heroservice.getHeroes()
            .then(heroes => this.heroes = heroes.slice(0,4))
    }
}