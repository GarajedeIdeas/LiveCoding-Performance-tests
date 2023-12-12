import { sleep, group } from "k6";
import http from "k6/http";
import { checkStatus } from "../utils.js";
import { randomIntBetween } from "https://jslib.k6.io/k6-utils/1.1.0/index.js";

export const navigateToCart = () => {
  group("Navigate to Cart", () => {
    const response = http.get("http://ecommerce.test.k6.io/cart/");

    checkStatus({
      response,
      expectedStatus: 200,
      failOnError: true,
      printOnError: true
    });
  });

  sleep(randomIntBetween(pauseMin, pauseMax));
}