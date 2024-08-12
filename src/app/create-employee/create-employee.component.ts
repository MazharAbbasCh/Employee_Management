import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  employee: Employee = {
    id: 0, // or null if your model allows null values
    firstName: '',
    lastName: '',
    emailId: ''
  };

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.employee);
  }

}
