import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

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
  }
  addEmail(control: FormControl){
     console.log(control.value);
  }
  checkMe(){
    console.log(1);
  }
  //get multi check box
  getCheckboxes() {
    console.log(this.array.filter(x => x.checked === true).map(x => x.name));
  }
}
