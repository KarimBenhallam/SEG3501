import { Component, OnInit } from '@angular/core';
import { Researcher } from 'src/app/classes/researcher';
import { ResearchService } from 'src/app/services/research.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  researchers : Researcher[];
  selectedResearchers : Researcher[];
  filteredResearchers : Researcher[];
  score : number;
  faculties : number[]


  constructor(private researchService : ResearchService) {
    this.researchers = [];
    this.selectedResearchers = [];
    this.filteredResearchers = [];
    this.score = 0;
    this.faculties = []
    
   }

  ngOnInit(): void {
    this.researchers = this.researchService.getResearchers()
  }

  searchResearcher(event: any) {
    this.filteredResearchers = this.researchers.filter((s) =>
      s.lastName.toLowerCase().includes(event.query.toLowerCase().trim())
    );
  }

  addResearcher(selectedSearcher : Researcher){
    this.selectedResearchers.push(selectedSearcher);
    this.researchers.splice(this.researchers.lastIndexOf(selectedSearcher), 1)
    this.faculties.push(selectedSearcher.faculty)
    this.updateScore()
  }

  remove(index : number, researcher : Researcher){
    this.selectedResearchers.splice(index,1)
    this.faculties.splice(index,1)
    this.researchers.push(researcher)
    this.updateScore()
  }

  updateScore(){
    this.score = 0;
    if (this.faculties.includes(0)){
      this.score ++
    }
    if (this.faculties.includes(1)){
      this.score ++
    }
    if (this.faculties.includes(2)){
      this.score ++
    }
    if (this.faculties.includes(3)){
      this.score ++
    }
  }

}
