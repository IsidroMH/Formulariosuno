import { Component, OnInit } from '@angular/core';
import { MenuItem } from './interfaces/menu.interface';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

 templateMenu: MenuItem[] = [
{
  texto: 'Básicos',
  ruta: 'template/basic'
},
{
  texto: 'Dinámicos',
  ruta: 'template/dynamic'
},
{
  texto: 'Switches',
  ruta: 'template/switches'
}

 ]

 reactiveMenu: MenuItem[] = [
  {
    texto: 'Básicos',
    ruta: 'template/basic'
  },
  {
    texto: 'Dinámicos',
    ruta: 'template/dynamic'
  },
  {
    texto: 'Switches',
    ruta: 'template/switches'
  }
  
   ]


}
