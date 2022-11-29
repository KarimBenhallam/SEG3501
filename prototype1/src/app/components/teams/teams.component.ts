import { Component, OnInit } from '@angular/core';
import {Researcher} from "../../classes/researcher";
import { ResearchService } from 'src/app/services/research.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {

  team: Researcher[];

  constructor() {
    this.team = [];
  }

  receiveTeams($event: Researcher[]){
    this.team = $event;
  }
  ngOnInit(): void {
  }

}
