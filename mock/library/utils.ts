const fs = require('fs');
const path = require('path');
const mkdirp = require('mkdirp');

interface replaceOpt {
  keywords: Array<any>;
  face: string;
  size: string;
  color: string;
  back: string | null;
}

//替换关键字  =》 加粗，提示高亮字
/**
 * replace to mark   - 处理替换关键字（显性标识)
 * @param {string} str
 * @param {replaceOpt} option
 * @returns {string}
 */
export const replaceMark = (
  str: string,
  option: replaceOpt = { keywords: [], face: '', size: '', color: '', back: null }
) => {
  const keyList = option.keywords;

  if (!keyList || keyList.length === 0) return str;

  const keyStr = keyList.join('|');

  const reg = new RegExp(`${keyStr}`, 'g');

  return str.replace(reg, matched => {
    console.log(matched);

    return `<font face="${option.face}" size="${option.size}" color="${
      option.color
    }" style="background: ${option.back}" class="mark-library">${matched}</font>`;
  });
};

const defaultOpt = { keywords: [], face: 'STCAIYUN', size: '7', color: 'red', back: 'brown' };

/**
 * read markdown file and git content text by every library path
 * @param filepath      file path
 * @returns {string}
 */
export const readFile = (filepath = 'index') => {
  const contentText = fs.readFileSync(path.resolve(`./Library/${filepath}.md`), 'utf-8');

  return replaceMark(contentText, defaultOpt);
};

/**
 * merge path
 * @param {object} pathObj
 * @param {string} prefix
 * @returns {string}
 */
export const pathmerge = (pathObj: object, prefix: string = 'path-') => {
  let i = 1;
  let p = '';
  while (pathObj.hasOwnProperty(`${prefix}${i}`)) {
    p = p + pathObj[`${prefix}${i}`] + '/';
    i++;
  }
  return p;
};

/**
 * create File
 * @param body     request body
 * @returns {boolean}
 */
export const createFile = (body: { contentText?: string; pathObj?: object }) => {
  try {
    const { contentText, pathObj } = body;
    const p = pathmerge(pathObj, 'path-');
    const dirpath = `./Library/${p}`;

    mkdirp(path.resolve(dirpath), err => {
      if (err) {
        console.error(`生成文件失败`, err);
      } else {
        console.log(`生成文件 - ${pathObj['filename']}`);
        fs.writeFileSync(path.resolve(`${dirpath}${pathObj['filename']}`), contentText);
      }
    });
    return true;
  } catch (e) {
    return false;
  }
};

/**
 * judge File exists or not
 * @param checkval
 * @returns {boolean}
 */
export const judgeFileExists = (checkval: object) => {
  try {
    const p = pathmerge(checkval, 'path-');
    const filepath = `./Library/${p}${checkval['filename']}`;
    return fs.existsSync(path.resolve(filepath));
  } catch (e) {
    return false;
  }
};

/**
 * create File
 * @param body     request body
 * @returns {boolean}
 */
export const createMDFile123 = (body: { contentText?: string; pathObj?: object }) => {
  try {
    const { contentText, pathObj } = body;

    const prefix: string = 'path-';

    let i = 1;

    let p = '';

    while (pathObj.hasOwnProperty(`${prefix}${i}`)) {
      const pathname = pathObj[`${prefix}${i}`];
      p = p + pathname + '/';
      fs.exists(`./Library/${pathname}`, exists => {
        //path为文件夹路径
        if (exists) {
          console.log(`${pathname} 目录存在`);
        } else {
          console.log(`${pathname} 目录不存在 - 创建`);
          fs.mkdirSync(`./Library/${pathname}`);
        }
      });
      i++;
    }

    p = p + pathObj['filename'];
    console.log(`生成文件 - ${pathObj['filename']}`);
    fs.writeFileSync(path.resolve(`./Library/${p}`), contentText);

    return true;
  } catch (e) {
    return false;
  }
};
