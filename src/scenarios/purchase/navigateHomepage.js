import { sleep, group } from "k6";
import http from "k6/http";
import { checkStatus } from "../utils.js";
import { randomIntBetween } from "https://jslib.k6.io/k6-utils/1.1.0/index.js";

export const navigateHomepage = () => {
  group("Navigate to Homepage", () => {
    const response = http.get("http://ecommerce.test.k6.io/");

    checkStatus({
      response,
      expectedStatus: 200,
      failOnError: true,
      printOnError: true
    });

    // extract all of the available products using their "Add to Cart" buttons
    const addToCartButtons = response
      .html()
      .find("li[class*=product]")
      .find('a:contains("Add to Cart")')
      .toArray();

    const products = addToCartButtons.map(i => {
      return {
        id: i.get(0).getAttribute("data-product_id"),
        sku: i.get(0).getAttribute("data-product_sku")
      };
    });

    products.forEach(i => {
      console.debug(`Product ID: '${i.id}' SKU: '${i.sku}'`);
    });

    // select a random product and store in vars:
    globalThis.vars["selectedProduct"] = products[Math.floor(Math.random() * products.length)];
    console.debug(`Selected Product with ID: '${globalThis.vars["selectedProduct"].id}' and SKU: '${globalThis.vars["selectedProduct"].sku}'`);
  });

  sleep(randomIntBetween(pauseMin, pauseMax));
}