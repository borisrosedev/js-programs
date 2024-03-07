import { PATHS as P, SUFIX as S } from "./constants/paths.js";
import { DOM as D } from "./constants/dom.js";
import homePage from "./pages/home-page.js";
import landingPage from "./pages/landing-page.js";
import { LandingContainer } from "./containers/LandingContainer.js";
import { HomeContainer } from "./containers/HomeContainer.js";
import { LoginContainer } from "./containers/LoginContainer.js";
import loginPage from "./pages/login-page.js";

console.log("Dans le fichier router.js");

function createNavigation(path) {
  D.innerHTML = "";
  console.log('path', path)
  switch (path) {
    case S:
      D.container.innerHTML = landingPage();
      new LandingContainer();
      break;
    case S+P.home:
      D.container.innerHTML = homePage();
      new HomeContainer();
      break;
    case S+P.login:
      D.container.innerHTML = loginPage()
      new LoginContainer();
  }
}

function router() {
  //corps de la fonction
  // le début de son scope
  console.log("Dans la fonction router");
  // de son scope
  createNavigation(window.location.pathname+window.location.hash)
}

window.onNavigate = function(pathname){
    window.history.pushState("", null, pathname)
    createNavigation(pathname)
}

window.onpopstate = () => {
  createNavigation(window.location.pathname+window.location.hash)
}

//cette fonction est devenu exportable
export { router };
