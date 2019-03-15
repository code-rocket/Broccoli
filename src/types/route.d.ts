export interface routeKeyType {
  level?: number;
  name?: string;
  component?: string;
  path?: string;
  icon?: string;
  zh?: string;
  en?: string;
  key?: string;
  class?: string;
  localeskey?: string;
  children?: Array<object>;
  routes?: Array<object>;
  redirect?: string;
  meta?: routeKeyType;
}
