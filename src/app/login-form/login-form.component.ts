import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  loginForm = this.fb.group({
    username: new FormControl('', [Validators.minLength(4), Validators.maxLength(30), Validators.required]),
    password: new FormControl('', [Validators.minLength(8), Validators.maxLength(30), Validators.required]),
  });

  // username = this.loginForm.value.username!;
  // password = this.loginForm.value.password!;
  get username() {
    return this.loginForm.get('username');
  }

  get password() {
    return this.loginForm.get('password');
  }
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    // const usernameInputElement = document.getElementById('username');
    // const passwordInputElement = document.getElementById('password');
    //listens to change in username input string
    // usernameInputElement!.addEventListener('change', (event) => {
    //   if(this.username!.length <= 0) {
    //     this.usernameTrafficLights(false);
    //   } else if(this.username.length > 0 || this.username === null) {
    //     this.usernameTrafficLights(true);
    //   }
    // });
    // //listens to change in password input string
    // passwordInputElement!.addEventListener('change', (event) => {
    //   if(this.password.length <= 0) {
    //     this.passwordTrafficLights(false);
    //   } else if(this.password.length > 0 || this.password === null) {
    //     this.passwordTrafficLights(true);
    //   }
    // });
  }



  // usernameTrafficLights(isValid: boolean) {
  //   console.log(this.username.length);
  //   const usernameLightElement = document.getElementById('usernameLight');
  //   if(isValid === true) {
  //     usernameLightElement!.style.setProperty('background-color', 'green');
  //   } else {
  //     usernameLightElement!.style.setProperty('background-color', '#52192d');
  //   }
  //   return;
  // }

  // passwordTrafficLights(isValid: boolean) {
  //   const passwordLightElement = document.getElementById('passwordLight');
  //   if(isValid === true) {
  //     passwordLightElement!.style.setProperty('background-color', 'green');
  //   } else {
  //     passwordLightElement!.style.setProperty('background-color', '#52192d');
  //   }
  //   return;
  // };

  sendData(username: unknown | null, password: unknown | null) {
    const data = {
      username: username,
      password: password,
    }
    const dataJson = JSON.stringify(data);
    console.log(dataJson);
    const usernameInputElement = document.getElementById('username');
    const passwordInputElement = document.getElementById('password');
  }
}
