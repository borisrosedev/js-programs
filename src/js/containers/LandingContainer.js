import { PATHS as P } from "../constants/paths.js";

export class LandingContainer {
  name = "landing";

 

  constructor(onNavigate) {
    this.onNavigate = onNavigate;
  }

  onClick(e, route) {
    switch (route) {
      case P.home:
        this.onNavigate("/home");
        break;
    }
  }
}
