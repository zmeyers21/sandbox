import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../shared/services/employee.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  cards$: any[] = [];

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.cards$ = this.employeeService.employees;
  }

}
