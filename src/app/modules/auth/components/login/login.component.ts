import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  // Declaración de objeto de tipo FormGroup
  formLogin: FormGroup = new FormGroup({}); 

  constructor(private authService: AuthService){
  }

  ngOnInit(){
    
    this.formLogin = new FormGroup(
     {
      email: new FormControl('',[
        Validators.required,
        Validators.email
      ]),
      password: new FormControl('',[
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(10)
      ])
     }
  ) }

  message: any;
  sendLogin(): void{
    const {email, password} = this.formLogin.value;
    console.log(email, password);
    
    
    this.authService.sendCredentials(email, password)
        .subscribe( {
        next: (responseOK) => {
          this.message = responseOK.message;
          console.log(this.message);
      },
      error: err => {
        console.log("Sesion no iniciada, error");
        this.message = err.error.message;
        console.log(this.message);
      },
      complete: () => {
        console.log("Sesion iniciada correctamente")
      }
  })
  } 

  

    
}
