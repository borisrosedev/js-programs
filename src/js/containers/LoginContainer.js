import { PATHS as P } from "../constants/paths.js";

export class LoginContainer {
  name = "not-found";
  _email = "";
  _password = "";

  get email() {
    return this._email
  }

  set email(val){
      this._email = val
  }

  get password(){
    return this._password;
  }

  set password(val){
    this._password = val
  }

  static {
    console.log("🔵 into LoginContainer");
  }

  constructor(onNavigate) {
    this.onNavigate = onNavigate;
    const emailInput = document.getElementById('email');
    const password = document.getElementById('password');
    emailInput.onchange = (e) => {
      this.onChange(e, 'email');
    }
    password.onchange = (e) => {
      this.onChange(e, 'password');
    }
  }

  onChange(e, inputName){
    switch(inputName){
      case 'email':
        this.email = e.target.value;
        break;
      case 'password':
        this.password = e.target.password;
        break;
    }
  }

  onSubmit() {
    
  }
}
