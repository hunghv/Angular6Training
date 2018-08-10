import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { Hunghv } from './hunghv2';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.scss']
})
export class HelloWorldComponent implements OnInit {
  hunghvser:Hunghv;
  
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  array = [
    {
      name: 'one',
      checked: false
    },
    {
      name: 'two',
      checked: false
    },
    {
      name: 'three',
      checked: false
    },
    {
      name: 'four',
      checked: false
    },
    {
      name: 'five',
      checked: false
    }
  ]
  matcher = new MyErrorStateMatcher();
  constructor() { }
  ngOnInit() {
    this.hunghvser = {hunghv0:1, hunghv1:new Date('1968-11-16T00:00:00'), hunghv2:'abc', hunghv3:'hunghvhpu@gmail.com', hunghv4:[], hunghv5:'ashu'};
  }
  addEmail(control: FormControl){
     console.log(control.value);
  }
  checkMe(){
    console.log(1);
  }
  //get multi check box
  getCheckboxes() {
    
  }
  onSubmit(employeeForm){
   employeeForm.form.value.hunghv4=Object.keys(this.hunghvser.hunghv4).filter((item, index) => {
      return this.hunghvser.hunghv4[item];
    });;
      console.log(employeeForm.form.value)
  }
}
