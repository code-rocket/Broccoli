const fs = require('fs');
const path = require('path');

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
let replaceMark = (
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
let readMDFile = (filepath = 'index') => {
  const contentText = fs.readFileSync(path.resolve(`./Library/${filepath}.md`), 'utf-8');

  return replaceMark(contentText, defaultOpt);
};

// POST
function markdownTest(req, res) {
  // const libkey = req.body.libkey;//key for article in library store

  const filepath = req.body.path; //path for article in library store

  setTimeout(() => {
    res.json({
      status: 200,
      data: readMDFile(filepath),
      // replaceMark(require(`../Library/Modules/${path}`), defaultOpt)
      message: 'success',
    });

    res.status(200).end();
  }, 1000);
}

export default {
  'POST /libary/interview/article': markdownTest,
};
