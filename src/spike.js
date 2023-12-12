// https://k6.io/docs/test-types/spike-testing/

export const options = {
  // Key configurations for spike in this section
  stages: [
    { duration: "2m", target: 2000 }, // fast ramp-up to a high point
    // No plateau
    { duration: "1m", target: 0 }, // quick ramp-down to 0 users
  ],
};

export { default as default } from "./scenarios/simple/index.js";
