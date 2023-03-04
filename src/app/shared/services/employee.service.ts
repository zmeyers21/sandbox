import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  get employees() {
    return [
      {
        name: 'Michael Scott',
        title: 'Regional Manager',
        email: 'michael.scott@dundermifflin.com',
        phone: '(612) 867-5309',
        photo: 'michael.jpg'
      },
      {
        name: 'Dwight K. Schrute',
        title: 'Assistant (to the) Regional Manager',
        email: 'dwight.k.schrute@dundermifflin.com',
        phone: '(612) 867-5309',
        photo: 'dwight.jpg'
      },
      {
        name: 'Pam Beesly',
        title: 'Receptionist (office Hottie)',
        email: 'pam.beesly@dundermifflin.com',
        phone: '(612) 867-5309',
        photo: 'pam.jpg'
      },
      {
        name: 'Jim Halpert',
        title: 'Salesman',
        email: 'jim.halpert@dundermifflin.com',
        phone: '(612) 867-5309',
        photo: 'jim.jpg',
        last: true
      }
    ];
  }

}
