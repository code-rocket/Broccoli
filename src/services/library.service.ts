import { POST } from '@/utils/request';

export function libraryServices(data) {
  return POST('/libary/interview/article', data);
}
