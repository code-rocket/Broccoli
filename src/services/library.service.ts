import { POST } from '@/utils/request';

export function libraryGetServices(data) {
  return POST('/libary/interview/article', data);
}

export function libraryStoreServices(data) {
  return POST('/libary/interview/store', data);
}

export function libraryFileExists(data) {
  return POST('/libary/interview/isexists', data);
}
