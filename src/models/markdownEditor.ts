import { markdownEditorProps } from '@/types/markdownEditor';

export default {
  namespace: 'markdownEditor',

  state: {
    fileExt: ['md'], //which file format to store
    pathPrefix: 'path-', //path prefix
    contentInfo: {},
    contentText: JSON.parse(sessionStorage.getItem('contentText')) || '请输入...', //文章仓库
  },

  effects: {},

  reducers: {
    /**
     * set content information from markdown edit
     * @param {markdownEditorProps} state
     * @param {any} payload
     * @returns {{contentInfo: string}}
     */
    setContentInfo(state: markdownEditorProps, { payload }) {
      const { route, path } = payload;
      const filename = route.name;
      const pathList = path.split('/').filter(p => p && p !== filename);

      let o = {};
      if (pathList.length > 0) {
        pathList.forEach((p, index) => {
          o[`${state.pathPrefix}${index + 1}`] = p;
        });
      }

      return {
        ...state,
        ...{
          contentInfo: {
            ...o,
            ...{
              filename: `${filename}.${state.fileExt[0]}`, //文件名
              depth: pathList.length, //路径的层级（不包括最后一级文件名 ）
            },
          },
        },
      };
    },
    /**
     * set content text from markdown edit
     * @param {markdownEditorProps} state
     * @param {any} payload
     * @returns {{contentText: string}}
     */
    setContentText(state: markdownEditorProps, { payload }) {
      sessionStorage.setItem('contentText', JSON.stringify(payload));

      return {
        ...state,
        ...{
          contentText: payload,
        },
      };
    },
  },
};
