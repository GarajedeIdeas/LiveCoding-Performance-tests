// https://k6.io/docs/test-types/smoke-testing/

export const options = {
  vus: 3, // Key for Smoke test. Keep it at 2, 3, max 5 VUs
  duration: '1m', // This can be shorter or just a few iterations
};

export {default as default} from './scenarios/simple/index.js'