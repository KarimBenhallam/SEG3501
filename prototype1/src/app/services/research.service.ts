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
      new Researcher(1, 'John', 'Cena', ['Bio-Technologie','Gènes et évolution'], 'Génie', [new Research(1, 'Comment légalement améliorer sa performance en sport de haut niveau',
      "S'est entrainé tous les jours pour évaluer l'effet sur sa carrière", 1, [1])]),
      new Researcher(2, 'Mary', 'Smith', ['Bio-Technologie','Intelligence Artificielle'], 'Génie', [new Research(2, 'Apprentissage machine en html',
      "A poussé les limites du langage html pour voir à quel point on pouvait développer de l'intelligence artificielle dessus", 2, [2] )]),
      new Researcher(3, 'Joseph', 'Baker', ['Bio-Technologie','Intelligence Artificielle'], 'Sciences Sociales', []),
      new Researcher(4, 'Jasmine', 'Taylor', ['Gènes et évolution','Intelligence Artificielle'], 'Sciences', []),
      new Researcher(5, 'François', 'Neyo', ['Intelligence Artificielle'], 'Génie', []),
      new Researcher(6, 'Jonathan', 'Baker', ['Bio-Technologie'], 'Sciences', []),
      new Researcher(6, 'Erling', 'Paul', ['Gènes et évolution'], 'Telfer', []),
    ]

  }
}
