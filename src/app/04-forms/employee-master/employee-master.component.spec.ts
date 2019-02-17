import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeMasterComponent } from './employee-master.component';
import { componentFactoryName } from '@angular/compiler';
import { FormBuilder, FormControl } from '@angular/forms';

describe('EmployeeMasterComponent Suite',()=>{
  var component:EmployeeMasterComponent;

  beforeEach(()=>{
    component = new EmployeeMasterComponent(new FormBuilder());    
  })

  it('should form with 3 controls ',()=>{
    expect(component.employeeFormGroup.contains('firstName')).toBeTruthy();
    expect(component.employeeFormGroup.contains('lastName')).toBeTruthy();
    expect(component.employeeFormGroup.contains('email')).toBeTruthy();
  });

  it('shuld make firstName control required',()=>{
    let control = component.employeeFormGroup.get('firstName');
    control.setValue('');
    expect(control.valid).toBe(false);
    /* control.setValue('Pranav');
    expect(control.valid).toBe(true); */
  });

});

/* describe('EmployeeMasterComponent', () => {
  let component: EmployeeMasterComponent;
  let fixture: ComponentFixture<EmployeeMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create employeeMasterComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should create employeeMasterComponent', () => {
    expect(component).toBeTruthy();
  });
}); */
