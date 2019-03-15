export function urlToList(url: string) {
  const urlList = url.split('/').filter(i => i);
  //组合成了路由路径
  return urlList.map((urlItem, index) => `/${urlList.slice(0, index + 1).join('/')}`);
}
