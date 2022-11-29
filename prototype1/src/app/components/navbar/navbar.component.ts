import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  items: MenuItem[] = [
    {label: 'Liste des chercheurs',
    icon: 'pi pi-fw pi-users',
    routerLink: '/list'},
    {
      label: "Formation d'équipes",
      icon: 'pi pi-fw pi-user-plus',
      routerLink: '/team'
    },
    {
      label: "Listes d'équipes",
      icon: 'pi pi-fw pi-users',
      routerLink: '/teams'
    }
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
