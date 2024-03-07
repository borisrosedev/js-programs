import { Paths as P } from "../constants/paths.js";

export class ProductsContainer {
  name = "products";

  static {
    console.log("🔵 into Product Container");
  }

  constructor(onNavigate) {
    this.onNavigate = onNavigate;
    
  }

  onClick(e, route, id) {
    switch (route) {
      case P.product:
        this.onNavigate("#product?id="+id);
        break;
    }
  }
}
