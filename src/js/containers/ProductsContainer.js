import { Paths as P } from "../constants/paths.js";
import { LocalProductsService } from "../services/local_services/local-products-service.js";

export class ProductsContainer {
  name = "products";

  constructor(onNavigate) {
    this.onNavigate = onNavigate;
    this.onInit();
  }

  async onInit() {
    this.products = await LocalProductsService.getAllProducts();
  }

  onClick(e, route, id) {
    switch (route) {
      case P.product:
        this.onNavigate("#product?id=" + id);
        break;
    }
  }
}
