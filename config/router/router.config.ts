import router_app from './modules/router.app';
import router_user from './modules/router.user';


export default [
  ...router_user,
  ...router_app,
];
