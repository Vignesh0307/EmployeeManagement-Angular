import { Component, OnInit } from '@angular/core';
import {Employee} from '../employee';
import {EmployeeServiceService} from '../Service/employee-service.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees : Employee[];

  constructor(private employeeService : EmployeeServiceService) { }

  ngOnInit(): void {
    this.getEmployeeList();
  }

  getEmployeeList(){
    this.employeeService.getEmployeesList().subscribe(data => {
      this.employees = data;
      console.log(this.employees);
    });
  }

}
