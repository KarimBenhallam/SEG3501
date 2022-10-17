import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './components/list/list.component';
import { TeamComponent } from './components/team/team.component';

const routes: Routes = [
  {
    path: 'list',
    component: ListComponent 
  },
  {
    path: 'team',
    component: TeamComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
