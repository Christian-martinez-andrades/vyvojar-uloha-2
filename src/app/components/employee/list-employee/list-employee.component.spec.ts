import { ComponentFixture, TestBed } from '@angular/core/testing';
import {HttpClient, HttpHandler} from '@angular/common/http';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';

import { ListEmployeeComponent } from './list-employee.component';

describe('ListEmployeeComponent', () => {
  let component: ListEmployeeComponent;
  let fixture: ComponentFixture<ListEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListEmployeeComponent],
      providers: [ HttpClient, HttpHandler ],
      imports: [ RouterTestingModule, HttpClientTestingModule ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});
