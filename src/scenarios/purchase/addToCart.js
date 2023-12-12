import { sleep, group } from "k6";
import http from "k6/http";
import { checkStatus } from "../utils.js";
import { randomIntBetween } from "https://jslib.k6.io/k6-utils/1.1.0/index.js";

export const addToCart = () => {
  group("Add to Cart", () => {
    const response = http.post(
      "http://ecommerce.test.k6.io/?wc-ajax=add_to_cart",
      {
        product_sku: globalThis.vars["selectedProduct"].sku,
        product_id: globalThis.vars["selectedProduct"].id,
        quantity: "1",
      }
    );

    checkStatus({
      response,
      expectedStatus: 200,
      failOnError: true,
      printOnError: true
    });

    console.debug(`Added to cart: '${globalThis.vars["selectedProduct"].id}' and SKU: '${globalThis.vars["selectedProduct"].sku}'`);
  });

  sleep(randomIntBetween(pauseMin, pauseMax));
}