import { Injectable } from '@angular/core';
import { Employee } from '../interfaces/Employee';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }
  setEmployees(employees: Employee[]) {
    if (localStorage.getItem('employees')) {
      localStorage.removeItem('employees')
    }
    localStorage.setItem('employees', JSON.stringify(employees));
  }
  getEmployees(): Employee[] {
    return JSON.parse((localStorage.getItem('employees'))) || [];
  }


}

