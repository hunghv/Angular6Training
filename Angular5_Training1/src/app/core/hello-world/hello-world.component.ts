import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { Hunghv } from './hunghv2';
import {Hello}  from './../services/hello';
import { HelloService } from './../services/hello.service';
import {Food} from './../services/food';
import {Fruit} from './../services/food';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

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
    hunghvser: Hunghv;
    visible = true;
    selectable = true;
    removable = true;
    addOnBlur = true;
    readonly separatorKeysCodes: number[] = [ENTER, COMMA];
    emailFormControl = new FormControl('', [
        Validators.required,
        Validators.email,
    ]);
    toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
    foods: Food[] = [
        { value: 'steak-0', viewValue: 'Steak' },
        { value: 'pizza-1', viewValue: 'Pizza' },
        { value: 'tacos-2', viewValue: 'Tacos' }
    ];
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
    ];
    fruits: Fruit[] = [
        { name: 'Lemon' },
        { name: 'Lime' },
        { name: 'Apple' },
    ];

    hellos: Hello[];
    matcher = new MyErrorStateMatcher();
    constructor(private helloservices: HelloService) { }
    ngOnInit(): void {
        this.hunghvser = { hunghv0: 1, hunghv1: new Date('1968-11-16T00:00:00'), hunghv2: 'abc', hunghv3: 'hunghvhpu@gmail.com', hunghv4: [], hunghv5: 'ashu', hunghv6: [], hunghv7: 2, hunghv8: [], hunghv9: 0 };
        this.helloservices
            .getHelloList()
            .subscribe((data: Hello[]) => {
                this.hellos = data;
            });
            this.startTimer();
    }
    addEmail(control: FormControl) {
        console.log(control.value);
    }
    onDelete(employeeID: number) {
        console.log(employeeID);
    }
    //get multi check box
    getCheckboxes() {
    }
    onSubmit(employeeForm) {
        employeeForm.form.value.hunghv4 = Object.keys(this.hunghvser.hunghv4).filter((item, index) => {
            return this.hunghvser.hunghv4[item];
        });
        employeeForm.form.value.hunghv8 = this.fruits;
        console.log(employeeForm.form.value)
    }
    interval;
    startTimer() {
        this.interval = setInterval(() => {
          this.hunghvser.hunghv9=this.hunghvser.hunghv9+1;
            if (this.hunghvser.hunghv9 <= 100) {
              console.log(this.hunghvser.hunghv9);
            } else {
              this.hunghvser.hunghv9= 0;
            }
        }, 100)
    }
    pauseTimer() {
        clearInterval(this.interval);
    }

    doSomething(event: Event) {
        console.log(event);
    }
    selectedChips: any[] = [];
    add(event: MatChipInputEvent): void {
        const input = event.input;
        const value = event.value;
        // Add our fruit
        if ((value || '').trim()) {
            this.fruits.push({ name: value.trim() });
        }

        // Reset the input value
        if (input) {
            input.value = '';
        }
    }

    remove(fruit: Fruit): void {
        const index = this.fruits.indexOf(fruit);

        if (index >= 0) {
            this.fruits.splice(index, 1);
        }
    }

    changeSelected(parameter: string, query: string) {

        let index = this.selectedChips.indexOf(query);
        if (index >= 0) {
            this.selectedChips.splice(index, 1);
        } else {
            this.selectedChips.push(query);
        }
        console.log("this. selectedChips " + this.selectedChips);

    }
}
