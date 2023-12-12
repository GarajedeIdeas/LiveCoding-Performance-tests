// https://k6.io/docs/test-types/breakpoint-testing/

export const options = {
  // Key configurations for breakpoint in this section
  executor: "ramping-arrival-rate", //Assure load increase if the system slows
  stages: [
    { duration: "2h", target: 20000 }, // just slowly ramp-up to a HUGE load
  ],
};

export {default as default} from './scenarios/simple/index.js'