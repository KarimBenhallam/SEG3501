import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SortEvent } from 'primeng/api';
import { Table } from 'primeng/table';
import { Researcher } from 'src/app/classes/researcher';
import { ResearchService } from 'src/app/services/research.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  researchers : Researcher[];

  constructor(private router : Router, private researchService : ResearchService) {
    this.researchers = [];
   }

  ngOnInit(): void {
    this.researchers = this.researchService.getResearchers()
  }
  
  customSort(event: SortEvent) {
    event.data?.sort((data1, data2) => {
      let value1 = data1[event.field!];
      let value2 = data2[event.field!];
      let result = null;

      if (value1 == null && value2 != null) result = -1;
      else if (value1 != null && value2 == null) result = 1;
      else if (value1 == null && value2 == null) result = 0;
      else if (typeof value1 === 'string' && typeof value2 === 'string')
        result = value1.localeCompare(value2);
      else result = value1 < value2 ? -1 : value1 > value2 ? 1 : 0;

      return event.order! * result;
    });
  }

  redirect(event: any) {
    this.router.navigate([`/researchers/${event.data.id}`]);
  }
  
  clear(table: Table) {
    table.clear();
}
}
