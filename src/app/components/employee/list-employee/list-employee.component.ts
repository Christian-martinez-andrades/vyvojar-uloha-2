import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Employee } from 'src/app/interfaces/Employee';
import dayjs from 'dayjs';
import { ExternalCallService } from 'src/app/services/external-call.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';
@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {
  searchTerm: string;
  page = 1;
  pageSize = 4;
  collectionSize: number;
  currentRate = 8;
  fewemployees: Employee[]
  loading = true;
  employees: Employee[]
  msg = false;
  anadir = false;
  employeeForm: FormGroup;
  updating = false;
  employeeOld: Employee;
  works = [];
  constructor(private externalCallService: ExternalCallService, private localStorageService: LocalStorageService) { }


  ngOnInit(): void {
    this.employees = this.localStorageService.getEmployees();
    this.externalCallService.getAll().subscribe(res => {
      this.works = res.positions;
      if (this.employees.length == 0) {
        this.loading = false;
        this.msg = true;

      } else {
        this.loading = false;
      }
      this.collectionSize = this.employees.length;
      this.fewemployees = this.employees;
    });
    // You can use with a different code adding an async call
    /* 
    this.works = (await  this.externalCallService.getAll().toPromise()).positions
    */

  }

  search(value: string): void {
    this.fewemployees = this.employees.filter((val) => val.name.toLowerCase().includes(value.toLowerCase())
      || val.surname.toLowerCase().includes(value.toLowerCase())
      || val.work.toLowerCase().includes(value.toLowerCase())
      || val.dateOfBirth.toString().includes(value.toLowerCase())

    );
    this.collectionSize = this.fewemployees.length;
  }

  update(em: Employee) {
    this.updating = true;
    this.employeeOld = em;
    this.initForm(em);
  }
  onSubmitUpdate() {
    if (!this.employeeForm.valid) {
      return;
    }
    const index = this.employees.indexOf(this.employeeOld)
    this.employees.splice(index, 1, this.employeeForm.value)
    this.collectionSize = this.employees.length;
    this.fewemployees = this.employees;
    if (this.employees.length != 0) {
      this.msg = false;
    }
    this.employeeForm.reset();
    this.updating = false;
    this.employeeOld = null;
    this.localStorageService.setEmployees(this.employees);

  }
  onDelete(em: Employee) {
    this.employees = this.employees.filter(obj => obj !== em);
    this.collectionSize = this.employees.length;
    this.fewemployees = this.employees;
    if (this.employees.length != 0) {
      this.msg = false;
    } else {
      this.msg = true;
    }
    this.localStorageService.setEmployees(this.employees);
  }
  add() {
    if (!this.updating) {
      this.anadir = true;
      this.initForm();
    }

  }
  initForm(employee?: Employee) {
    this.employeeForm = new FormGroup({

      name: new FormControl(employee?.name || '', Validators.required),
      surname: new FormControl(employee?.surname || '', Validators.required),
      work: new FormControl(employee?.work || '', Validators.required),
      dateOfBirth: new FormControl(dayjs(employee?.dateOfBirth).format('YYYY-MM-DD') || new Date(), Validators.required),

    });
  }
  onCancel() {
    this.anadir = false;
  }
  onSubmit() {
    if (!this.employeeForm.valid) {
      return;
    }
    this.employees.push(this.employeeForm.value);
    this.collectionSize = this.employees.length;
    this.fewemployees = this.employees;
    if (this.employees.length != 0) {
      this.msg = false;
    }
    this.employeeForm.reset();
    this.anadir = false;
    this.localStorageService.setEmployees(this.employees);
  }

  get dateOfBirth() {
    return this.employeeForm.get('dateOfBirth');
  }
  get work() {
    return this.employeeForm.get('work');
  }
  get surname() {
    return this.employeeForm.get('surname');
  }

  get name() {
    return this.employeeForm.get('name');
  }
}
