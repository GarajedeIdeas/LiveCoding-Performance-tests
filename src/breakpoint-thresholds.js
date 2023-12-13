// https://k6.io/docs/test-types/breakpoint-testing/
// https://github.com/grafana/k6-learn/blob/main/Modules/II-k6-Foundations/07-Setting-test-criteria-with-thresholds.md

export const options = {
  // Key configurations for breakpoint in this section
  executor: "ramping-arrival-rate", //Assure load increase if the system slows
  stages: [
    { duration: "2h", target: 20000 }, // just slowly ramp-up to a HUGE load
  ],
  thresholds: {
    http_req_failed: [
      {
        threshold: "rate<=0.05", // http errors should be less than 0.5%
        abortOnFail: true, // the test will abort as soon as a threshold is crossed
      },
    ],
    http_req_duration: ["p(95)<=100"] // 95% of requests should be below 200ms
  },
};

export { default as default } from "./scenarios/simple/index.js";
