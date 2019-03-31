export interface markdownEditorProps {
  dispatch: any;
  fileExt: Array<string>; //文件名称- 合法后缀
  pathPrefix: string; //path prefix
  contentInfo: object; //文章内容信息
  contentText: string; //文章内容主体
  handleSave: Function; //文章保存
  handleChange: Function; //文章改变
  onRef: any;
  child_editor: any;
  child_form: any;
  isExists: boolean; //路径文章是否存在
}
