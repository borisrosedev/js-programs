import { PATHS as P } from "../constants/paths.js";
import formComponent from "../components/form.js";

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

    this.formInputs = [{
      name:'email',
      placeholder: 'Entrez votre email',
      type: 'email'
    }, {
      name: 'password',
      placeholder: 'Entrez votre mot de passe',
      type: 'password'
    }]
    this.form = document.getElementById("login-form");
    this.form.innerHTML += formComponent(this.formInputs, 'Connexion')


    setTimeout(() => {
      const emailInput = document.getElementById('email');
      const password = document.getElementById('password');
      emailInput.onchange = (e) => {
        this.onChange(e, 'email');
      }
      password.onchange = (e) => {
        this.onChange(e, 'password');
      }
    }, 0)
  
  }


  onLogOptionClick(option){
    this.formInputs = []
    if(option == 'login'){
  
      this.formInputs = [{
        name:'email',
        placeholder: 'Entrez votre email',
        type: 'email'
      }, {
        name: 'password',
        placeholder: 'Entrez votre mot de passe',
        type: 'password'
      }]
    }

    if(option == 'register'){
      this.formInputs = [{
        name:'email',
        placeholder: 'Entrez votre email',
        type: 'email'
      }, {
        name: 'password',
        placeholder: 'Entrez votre mot de passe',
        type: 'password'
      }, {
        name: 'confirmedPassword',
        placeholder: 'Confirmez votre mot de passe',
        type: 'password'
      }]
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
