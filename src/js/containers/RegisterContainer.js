import { Paths as P } from "../constants/paths.js";

export class RegisterContainer {
  name = "not-found";
  _email = "";
  _password = "";
  _confirmedPassword = "";

  get email() {
    return this._email
  };

  set email(val){
      this._email = val
  }

  get password(){
    return this._password;
  }

  set password(val){
    this._password = val
  }

  get confirmedPassword(){
    return this._confirmedPassword
  }

  set confirmedPassword(val){
    this._confirmedPassword = val
  }

  static {
    console.log("🔵 into RegisterContainer");
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

  onSubmit(e) {
    this.password = ""
  }
}
