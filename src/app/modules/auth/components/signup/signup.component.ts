import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  // declaración de objeto tipo FormGroup
  formSignup: FormGroup = new FormGroup({});

  constructor(){

  }

  ngOnInit(){
    this.formSignup = new FormGroup ({
      name: new FormControl('',[

      ]),
      age: new FormControl('',[

      ]),
      email: new FormControl('',[
        Validators.required,
        Validators.email
      ]),
      password: new FormControl('',[
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(10)
      ]),
      passwordVerication: new FormControl('',[
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(10)
      ])
    })
  }

  sendSignup(){

  }
}
