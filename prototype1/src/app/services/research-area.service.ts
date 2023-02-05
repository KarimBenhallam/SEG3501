import { Injectable } from '@angular/core';
import { ResearchArea } from '../classes/research-area';
import { Researcher } from '../classes/researcher';
import { ResearchService } from './research.service';

@Injectable({
  providedIn: 'root'
})
export class ResearchAreaService {

  researchers : Researcher[];
  constructor( private researchService : ResearchService) {
    this.researchers = researchService.getResearchers()
   }

  getResearchAreas() : ResearchArea[]{
    return [
      new ResearchArea(1, 'Bio-Technologies', [this.researchers[0], this.researchers[1], this.researchers[2], this.researchers[5]]),
      new ResearchArea(2, 'Gènes et Évolution', [this.researchers[0], this.researchers[3], this.researchers[6]]),
      new ResearchArea(3, 'Intelligence Artificielle', [this.researchers[1], this.researchers[2], this.researchers[3], this.researchers[4]])
    ]
  }
}
