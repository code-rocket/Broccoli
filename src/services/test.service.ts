import { GET, POST } from '@/utils/request';

export function testget() {
  return GET('/test/get');
}

export function testpost(data) {
  return POST('/test/post', data);
}
