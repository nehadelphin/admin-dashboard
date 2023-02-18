import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  // FormGroup: represents an entire form
  // Formcontrol: 1 single form Control

  loginForm: FormGroup = new FormGroup({
      email: new FormControl("", [Validators.required]),
      password: new FormControl("", [Validators.minLength(6), Validators.required])
    });

    handleSubmit() {
      if (this.loginForm.valid){
        alert("Hello")
      } else {
        alert("Bye")
      }
    }
  }

