import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  displayedColumns: string[] = [
    'id', 'name', 'age', 'status'
  ]; 

  dataSource = [
    {
      id: '1',
      name: 'Nose',
      lastName: 'nose',
      age: 13,
      status: true,
    }
  ];

  constructor() {}

  ngOnInit(): void {
    // Initialization logic if any
  }
}
