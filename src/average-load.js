// https://k6.io/docs/test-types/load-testing/

export const options = {
  // Key configurations for avg load test in this section
  stages: [
    { duration: "5m", target: 100 }, // traffic ramp-up from 1 to 100 users over 5 minutes.
    { duration: "30m", target: 100 }, // stay at 100 users for 30 minutes
    { duration: "5m", target: 0 }, // ramp-down to 0 users
  ],
};

export { default as default } from "./scenarios/simple/index.js";
