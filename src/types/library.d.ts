import { routeKeyType } from './route';

//use for module page information in library layout
export interface moduleInfoProps extends routeKeyType {
  tab: string,
  route: routeKeyType,
  parentRoute: routeKeyType,
}



//use for library model
export interface libraryModelProps {
  articleStore: Array<object>;//文章仓库
  maxStock: number,//最大库存数量
  instock?: boolean,//库存中没有
  libkey?: string,//文章字段
}
