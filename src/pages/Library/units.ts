export const recombinate = route => {
  return {
    tab: route.meta.zh,
    key: route.name,
    icon: route.icon,
    path: route.path,
    zh: route.meta.zh,
    en: route.meta.en,
    localeskey: route.meta.localeskey,
    class: route.meta.class,
    route: route,
    parentRoute: route,
  };
};
