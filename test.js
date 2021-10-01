import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  duration: '1m',
  vus: 50,
  thresholds: {
    http_req_duration: ['p(95)<1000'],
  },
};

export default function () {
  const res = http.get('http://hello.churcher.me');
  
  check(result, {
    'http response status code is 200': result.status === 200,
  });
  
  sleep(1);
}
