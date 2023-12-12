// https://k6.io/docs/test-types/soak-testing/

export const options = {
    // Key configurations for Soak test in this section
    stages: [
      { duration: '5m', target: 100 }, // traffic ramp-up from 1 to 100 users over 5 minutes.
      { duration: '8h', target: 100 }, // stay at 100 users for 8 hours!!!
      { duration: '5m', target: 0 }, // ramp-down to 0 users
    ],
  };

export { default as default } from "./scenarios/simple/index.js";