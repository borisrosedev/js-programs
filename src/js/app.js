import { router } from "./router.js"

function app(){
    // cela retourne un appel à la fonction router n
    // qui se trouve dans router.js
    console.log("Dans la fonction  app.js");
    return router();
}

app()