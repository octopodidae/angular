import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admis',
  templateUrl: './admis.component.html',
  styleUrls: ['./admis.component.css']
})
export class AdmisComponent implements OnInit {
  students = [{name: "Bob", moyenne: 18}, {name: "Zak", moyenne: 12},
    {name: "Léon", moyenne: 17},
    {name: "Pierre", moyenne: 7},
    {name: "Jean", moyenne: 8},
    {name: "Luc", moyenne: 9}];
  constructor() { }

  ngOnInit() {
  }

}
