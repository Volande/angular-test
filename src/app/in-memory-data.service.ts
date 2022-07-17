import { Injectable } from '@angular/core';
import {InMemoryDbService} from "angular-in-memory-web-api";
import {Hero} from './hero';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      {id: 13,
        name: 'Bombasto',
        img: ["hero-details/photo/photo1.jpg",
          "https://drive.google.com/file/d/1KoDJhr9fUgsv286iud8J95vGOrF3EK8Y/view?usp=sharing" ] },
      {id: 13,
        name: 'Bombasto',
        img: ["hero-details/photo/photo1.jpg",
          "https://drive.google.com/file/d/1KoDJhr9fUgsv286iud8J95vGOrF3EK8Y/view?usp=sharing" ] },
      {id: 13,
        name: 'Bombasto',
        img: ["hero-details/photo/photo1.jpg",
          "https://drive.google.com/file/d/1KoDJhr9fUgsv286iud8J95vGOrF3EK8Y/view?usp=sharing" ] },
      {id: 14, name: 'Celeritas',
        img: ["https://drive.google.com/file/d/1mvgBLFoVY4uPc-tn8PO4nx2O8ZAJBW9i/view?usp=sharing",
          "https://drive.google.com/file/d/1CCNM1LXPQtp8NW6zAOmhyg5adT937Mij/view?usp=sharing"]},
      {id: 15, name: 'Magneta',
        img: ["https://drive.google.com/file/d/1alLvXCkUu7ioulOlMY3EcOpzlkwSiOxf/view?usp=sharing",
        "https://drive.google.com/file/d/15FamvL68T3GstXuAlQszNcyF2TAZVRsB/view?usp=sharing"]},
      {id: 16, name: 'RubberMan',
        img: ["https://drive.google.com/file/d/1HBEoL--6NBcZJ8O6VOpRs52lbR3rKDQl/view?usp=sharing",
        "https://drive.google.com/file/d/1yxOpPP_lVJ2SjMbxZgqjXOFkZPx8oKT3/view?usp=sharing"]},

    ];
    return {heroes};
  }

  getId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
  constructor() { }
}

