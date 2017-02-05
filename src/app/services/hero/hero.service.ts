import { Injectable } from '@angular/core'
import { Hero } from '../../class/hero/hero.class'
import { HEROES } from '../mocks/heroes'
@Injectable()
export class HeroService{

    // GET /heroes
    getHeroes():Promise<Hero[]>{
        return Promise.resolve(HEROES);
    }

    getHeroesSlowly(): Promise<Hero[]> {
        return new Promise(resolve => {
            // Simulate server latency with 2 second delay
            setTimeout(() => resolve(this.getHeroes()), 2000);
        });
    }
}