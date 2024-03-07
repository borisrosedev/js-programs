import HeaderLayout from "../layouts/header-layout.js";

export default function(){
    return `   
        ${HeaderLayout()}
        <main class="main landing__main"> 
            <video class="landing-main__video" autoplay loop muted >
                <source src="../public/videos/building.mp4" type="video/mp4">
            </video>
            <h1> Landing Page </h1>
        </main>
    `
}