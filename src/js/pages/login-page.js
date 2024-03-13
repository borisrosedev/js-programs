import HeaderLayout from "../layouts/header-layout.js";
export default function(){
    return `   
        ${HeaderLayout()}
        <main class="main login__main"> 
            <h1> Login Page </h1>

            <section class="login__form" id="login-form">
            <ul class="login__options">
                <li>Connexion</li>
                <li>Inscription</li>
            <ul>

            </section>
        </main>
    `
}