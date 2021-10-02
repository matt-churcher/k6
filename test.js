import http from 'k6/http';
import { sleep, check } from 'k6';

export let options = {
  thresholds: {
    http_req_failed: ['rate<0.01'],   // http errors should be less than 1% 
    http_req_duration: ['p(95)<200'], // 95% of requests should be below 200ms
  },
  stages: [
    { duration: '2m', target: 500 },
  ],
};

export default function () {

  const res = http.get('http://hello.churcher.me');

  check(res, {
    'is status 200': (r) => r.status === 200,
  });

  sleep(1)

}
