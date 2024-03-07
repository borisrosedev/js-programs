import cube from "../extra/cube.js";
import HeaderLayout from "../layouts/header-layout.js";

export default function(){
    return `
        ${HeaderLayout()}
        <main class="main home__main"> 
            <h1> Home Page </h1>
            <section class="home-main__cube-section">
                ${cube("../public/images/art-urbain.png")}
            </section>
           
        </main>
    `
}