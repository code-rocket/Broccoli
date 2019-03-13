/**
 * judge type accurate
 * @param value
 * @returns {any}
 */
export const judgeType = function(value: any) {
  const t = Object.prototype.toString.call(value);
  let map = {
    '[object Boolean]': 'boolean',
    '[object Number]': 'number',
    '[object String]': 'string',
    '[object Function]': 'function',
    '[object Array]': 'array',
    '[object Date]': 'date',
    '[object RegExp]': 'regExp',
    '[object Undefined]': 'undefined',
    '[object Null]': 'null',
    '[object Object]': 'object',
  };
  if (value instanceof Element) {
    return 'element';
  }
  return map[t];
};

/**
 * filter params in object - 深度清除对象中所有空属性值，以及空数组
 * @param obj
 */
export const filterParams = (obj: object): void => {
  for (let key in obj) {
    //Valuable
    if (!(obj[key] === 0 || obj[key] === false || obj[key]) || obj[key].toString().replace(/(^\s*)|(\s*$)/g, '') === '') {
      delete obj[key];
    }
    else {
      //obj
      if (judgeType(obj[key]) === 'object') {
        filterParams(obj[key]);
      }
      //array
      if (this.judgeType(obj[key]) === 'array') {
        if (obj[key].length === 0) {
          delete obj[key];
        }
      }
    }
  }
};
