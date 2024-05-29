import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-table-with-paginator',
  templateUrl: './table-with-paginator.component.html',
  styleUrls: ['./table-with-paginator.component.css'],
  
})

export class TableWithPaginatorComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'lastName', 'age', 'status'];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor() {
    this.dataSource = new MatTableDataSource([
      {
        "id": "1",
        "name": "Michael",
        "lastName": "Johnson",
        "age": 31,
        "status": false
      },
      {
        "id": "2",
        "name": "David",
        "lastName": "Smith",
        "age": 68,
        "status": false
      },
      {
        "id": "3",
        "name": "Jane",
        "lastName": "Rodriguez",
        "age": 57,
        "status": false
      },
      {
        "id": "4",
        "name": "Jane",
        "lastName": "Jones",
        "age": 61,
        "status": true
      },
      {
        "id": "5",
        "name": "Michael",
        "lastName": "Johnson",
        "age": 39,
        "status": true
      },
      {
        "id": "6",
        "name": "Sophia",
        "lastName": "Brown",
        "age": 55,
        "status": false
      },
      {
        "id": "7",
        "name": "Sophia",
        "lastName": "Garcia",
        "age": 11,
        "status": true
      },
      {
        "id": "8",
        "name": "Laura",
        "lastName": "Rodriguez",
        "age": 13,
        "status": true
      },
      {
        "id": "9",
        "name": "Emily",
        "lastName": "Rodriguez",
        "age": 69,
        "status": true
      },
      {
        "id": "10",
        "name": "Robert",
        "lastName": "Jones",
        "age": 27,
        "status": true
      },
      {
        "id": "11",
        "name": "David",
        "lastName": "Garcia",
        "age": 59,
        "status": true
      },
      {
        "id": "12",
        "name": "Sophia",
        "lastName": "Smith",
        "age": 44,
        "status": false
      },
      {
        "id": "13",
        "name": "Emily",
        "lastName": "Williams",
        "age": 29,
        "status": true
      },
      {
        "id": "14",
        "name": "Emily",
        "lastName": "Jones",
        "age": 17,
        "status": false
      },
      {
        "id": "15",
        "name": "Sophia",
        "lastName": "Rodriguez",
        "age": 43,
        "status": false
      },
      {
        "id": "16",
        "name": "Emily",
        "lastName": "Johnson",
        "age": 31,
        "status": false
      },
      {
        "id": "17",
        "name": "Alex",
        "lastName": "Rodriguez",
        "age": 58,
        "status": false
      },
      {
        "id": "18",
        "name": "Jane",
        "lastName": "Johnson",
        "age": 48,
        "status": true
      },
      {
        "id": "19",
        "name": "Michael",
        "lastName": "Smith",
        "age": 46,
        "status": false
      },
      {
        "id": "20",
        "name": "Michael",
        "lastName": "Johnson",
        "age": 10,
        "status": true
      },
      {
        "id": "21",
        "name": "Robert",
        "lastName": "Jones",
        "age": 60,
        "status": true
      },
      {
        "id": "22",
        "name": "Laura",
        "lastName": "Rodriguez",
        "age": 22,
        "status": false
      },
      {
        "id": "23",
        "name": "Sophia",
        "lastName": "Rodriguez",
        "age": 67,
        "status": false
      },
      {
        "id": "24",
        "name": "Michael",
        "lastName": "Johnson",
        "age": 27,
        "status": true
      },
      {
        "id": "25",
        "name": "Jane",
        "lastName": "Martinez",
        "age": 31,
        "status": false
      },
      {
        "id": "26",
        "name": "Sophia",
        "lastName": "Martinez",
        "age": 44,
        "status": false
      },
      {
        "id": "27",
        "name": "Robert",
        "lastName": "Brown",
        "age": 48,
        "status": true
      },
      {
        "id": "28",
        "name": "Laura",
        "lastName": "Davis",
        "age": 22,
        "status": true
      },
      {
        "id": "29",
        "name": "Laura",
        "lastName": "Davis",
        "age": 55,
        "status": false
      },
      {
        "id": "30",
        "name": "John",
        "lastName": "Davis",
        "age": 36,
        "status": false
      },
      {
        "id": "31",
        "name": "David",
        "lastName": "Jones",
        "age": 12,
        "status": true
      },
      {
        "id": "32",
        "name": "Alex",
        "lastName": "Garcia",
        "age": 33,
        "status": true
      },
      {
        "id": "33",
        "name": "David",
        "lastName": "Williams",
        "age": 26,
        "status": false
      },
      {
        "id": "34",
        "name": "Michael",
        "lastName": "Johnson",
        "age": 26,
        "status": true
      },
      {
        "id": "35",
        "name": "Alex",
        "lastName": "Smith",
        "age": 69,
        "status": false
      },
      {
        "id": "36",
        "name": "Robert",
        "lastName": "Martinez",
        "age": 39,
        "status": false
      },
      {
        "id": "37",
        "name": "Sophia",
        "lastName": "Jones",
        "age": 40,
        "status": true
      },
      {
        "id": "38",
        "name": "Robert",
        "lastName": "Rodriguez",
        "age": 28,
        "status": true
      },
      {
        "id": "39",
        "name": "Michael",
        "lastName": "Smith",
        "age": 43,
        "status": true
      },
      {
        "id": "40",
        "name": "Sophia",
        "lastName": "Garcia",
        "age": 17,
        "status": false
      },
      {
        "id": "41",
        "name": "David",
        "lastName": "Smith",
        "age": 17,
        "status": true
      },
      {
        "id": "42",
        "name": "Michael",
        "lastName": "Rodriguez",
        "age": 64,
        "status": true
      },
      {
        "id": "43",
        "name": "Alex",
        "lastName": "Jones",
        "age": 22,
        "status": true
      },
      {
        "id": "44",
        "name": "David",
        "lastName": "Johnson",
        "age": 26,
        "status": true
      },
      {
        "id": "45",
        "name": "Jane",
        "lastName": "Garcia",
        "age": 30,
        "status": false
      },
      {
        "id": "46",
        "name": "John",
        "lastName": "Rodriguez",
        "age": 30,
        "status": false
      },
      {
        "id": "47",
        "name": "David",
        "lastName": "Garcia",
        "age": 35,
        "status": false
      },
      {
        "id": "48",
        "name": "Sophia",
        "lastName": "Jones",
        "age": 33,
        "status": true
      },
      {
        "id": "49",
        "name": "Laura",
        "lastName": "Johnson",
        "age": 52,
        "status": false
      },
      {
        "id": "50",
        "name": "Alex",
        "lastName": "Williams",
        "age": 36,
        "status": false
      },
      {
        "id": "51",
        "name": "Sophia",
        "lastName": "Garcia",
        "age": 60,
        "status": true
      },
    ]);

  }
  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
