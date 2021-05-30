import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  properties: Array<any> = [
    {
      "id": 1,
      "Name": "Ajay",
      "Type": "house",
      "Price": 12000
    },
    {
      "id": 2,
      "Name": "Samrat",
      "Type": "house",
      "Price": 14000
    },
    {
      "id": 3,
      "Name": "Vikas",
      "Type": "house",
      "Price": 16000
    },
    {
      "id": 4,
      "Name": "Santi",
      "Type": "house",
      "Price": 9000
    },
    {
      "id": 5,
      "Name": "Mantu",
      "Type": "house",
      "Price": 11000
    },
    {
      "id": 6,
      "Name": "Santu",
      "Type": "house",
      "Price": 17000
    },
    {
      "id": 7,
      "Name": "Chandu",
      "Type": "house",
      "Price": 20000
    }
]

  constructor() { }

  ngOnInit(): void {
  }

}
