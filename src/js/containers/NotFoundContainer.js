import { Paths as P } from "../constants/paths.js";

export class NotFoundContainer {
  name = "not-found";

  static {
    console.log("🔵 into LandingContainer");
  }

  constructor(onNavigate) {
    this.onNavigate = onNavigate;
  }

  onClick(e, route) {
    switch (route) {
      case P.landing:
        this.onNavigate("/");
        break;
    }
  }
}
