import { sleep, group } from "k6";
import http from "k6/http";
import { checkStatus } from "../utils.js";
import { randomIntBetween, findBetween } from "https://jslib.k6.io/k6-utils/1.1.0/index.js";

export const navigateToCheckout = () => {
  group("Navigate to Checkout", function () {
    const response = http.get("http://ecommerce.test.k6.io/checkout/");

    checkStatus({
      response,
      expectedStatus: 200,
      failOnError: true,
      printOnError: true
    });

    // dynamic value: update_order_review_nonce
    globalThis.vars["securityToken"] = findBetween(response.body, 'update_order_review_nonce":"', '"');

    // dynamic value: woocommerce-process-checkout-nonce
    globalThis.vars["checkoutToken"] = response
      .html("#woocommerce-process-checkout-nonce")
      .val();

    console.debug("Security token: " + globalThis.vars["securityToken"]);
    console.debug("Checkout token: " + globalThis.vars["checkoutToken"]);
  });

  sleep(randomIntBetween(pauseMin, pauseMax));
}