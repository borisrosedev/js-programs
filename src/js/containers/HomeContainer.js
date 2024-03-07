import { PATHS as P } from "../constants/paths.js";

export class HomeContainer {
    name = "home"


    constructor(onNavigate){
        this.onNavigate = onNavigate
    }


    onClick(e, route){
        switch(route){
            case P.products: 
                this.onNavigate('#products');
                break;
        }
  
    }


}