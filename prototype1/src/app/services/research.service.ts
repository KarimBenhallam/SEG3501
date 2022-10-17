import { Injectable } from '@angular/core';
import { Research } from '../classes/research';
import { Researcher } from '../classes/researcher';

@Injectable({
  providedIn: 'root'
})
export class ResearchService {

  constructor() { }

  getResearchers() : Researcher[]{
    return [
      new Researcher(1, 'John', 'Cena', [0,1], 1, [new Research(1, 'Comment légalement améliorer sa performance en sport de haut niveau', 
      "S'est entrainé tous les jours pour évaluer l'effet sur sa carrière", 1, [1])]),
      new Researcher(2, 'Mary', 'Smith', [0,2], 0, [new Research(2, 'Apprentissage machine en html', 
      "A poussé les limites du langage html pour voir à quel point on pouvait développer de l'intelligence artificielle dessus", 2, [2] )]),
      new Researcher(3, 'Joseph', 'Baker', [0,2], 2, []),
      new Researcher(4, 'Jasmine', 'Taylor', [1,2], 3, []),
      new Researcher(5, 'François', 'Neyo', [2], 0, []),
      new Researcher(6, 'Jonathan', 'Baker', [0], 0, []),
      new Researcher(6, 'Erling', 'Paul', [1], 2, []),
    ]
    
  }
}
