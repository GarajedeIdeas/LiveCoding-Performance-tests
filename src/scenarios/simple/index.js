import http from 'k6/http';
import {check, sleep} from 'k6';

export default () => {
    const res = http.get('https://test-api.k6.io');
    check(res, {
      'is status 200': (r) => r.status === 200,
    });
    sleep(1);
  };
