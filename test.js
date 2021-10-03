import http from 'k6/http';
import { sleep, check } from 'k6';

export let options = {
  thresholds: {
    http_req_failed: ['rate<0.1'],   // http errors should be less than 1% 
    http_req_duration: ['p(95)<1000'], // 95% of requests should be below 200ms
  },
  stages: [
    { duration: '1m', target: 200 },
  ],
};

export default function () {

  const res = http.get('http://hello.churcher.me');

  check(res, {
    'is status 200': (r) => r.status === 200,
  });

  sleep(1)

}
