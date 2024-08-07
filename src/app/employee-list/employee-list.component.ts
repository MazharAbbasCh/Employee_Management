import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees: Employee[] = [];

  constructor() { }

  ngOnInit(): void {
    this.employees = [
      { "id": 1, "firstName": "Mazhar", "lastName": "Abbas", "emailId": "mazhar@example.com" },
      { "id": 2, "firstName": "Asad", "lastName": "Ullah", "emailId": "asadullah@example.com" },
      { "id": 3, "firstName": "Husnain", "lastName": "Cheema", "emailId": "husnain@example.com" },
    ];
  }

}
