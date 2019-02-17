import { Component, OnInit } from '@angular/core';

import {FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-employee-master',
  templateUrl: './employee-master.component.html',
  styleUrls: ['./employee-master.component.css']
})
export class EmployeeMasterComponent implements OnInit {

  employeeFormGroup:FormGroup;
  constructor(fb:FormBuilder) {
    this.employeeFormGroup = fb.group({
      'firstName':new FormControl('',[Validators.required]),
      'lastName':new FormControl('',[]),
      'email':new FormControl('',[Validators.email])
    });
  }

  ngOnInit() {
  }

}
