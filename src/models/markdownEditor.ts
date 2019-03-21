import { markdownEditorProps } from '@/types/markdownEditor';

export default {
  namespace: 'markdownEditor',

  state: {
    contentText: JSON.parse(sessionStorage.getItem('contentText')) || '123', //文章仓库
  },

  effects: {},

  reducers: {
    /**
     * et content text from markdown edit
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
