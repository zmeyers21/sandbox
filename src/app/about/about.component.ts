import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../shared/services/employee.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  employees$: any[] = [];

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.employees$ = this.employeeService.employees;
  }

}
