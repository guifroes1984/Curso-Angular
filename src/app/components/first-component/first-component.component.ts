import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {

  name: string = 'Guilherme';
  age: number = 39;
  job = 'Programador';
  hobbies = ['vôlei', 'correr', 'estudar'];
  car = {
    name: 'Gol G3',
    year: 2003,
  }

  constructor() { }

  ngOnInit(): void {
  }

}
