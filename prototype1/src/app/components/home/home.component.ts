import { Component, OnInit } from '@angular/core';
import { ResearchArea } from 'src/app/classes/research-area';
import { ResearchAreaService } from 'src/app/services/research-area.service';

// interface researchArea {
//   name: string,
//   code: string
// }

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {

  researchAreas: ResearchArea[];
  selectedResearchAreas: ResearchArea[];
  filteredResearchAreas: ResearchArea[];
  selectedFaculties : string[]
  selectedAll : boolean;


  constructor(private researchAreaService : ResearchAreaService) {
    this.researchAreas = [];
    this.selectedResearchAreas = [];
    this.filteredResearchAreas = [];
    this.selectedFaculties=[];
    this.selectedAll = false;
  }

  ngOnInit(): void {
    this.researchAreas = this.researchAreaService.getResearchAreas();
  }

  searchResearchArea(event: any) {
    this.filteredResearchAreas = this.researchAreas.filter((s) =>
      s.name.toLowerCase().includes(event.query.toLowerCase().trim())
    );
  }


  search(){
    //to Implement
  }

}
