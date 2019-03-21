import React, { Component } from 'react';
import Editor from 'for-editor';
import { connect } from 'dva';
import { markdownEditorProps } from '@/types/markdownEditor';

@connect(({ markdownEditor }) => ({
  contentText: markdownEditor.contentText,
}))
class MarkdownEditor extends Component<markdownEditorProps> {
  componentDidMount() {
    this.props.onRef(this);
  }

  /**
   * Editor save
   */
  handleSave() {
    const { contentText } = this.props;
    console.log('Editor save ' + contentText);
    this.props.handleSave();
  }

  /**
   * Editor change
   * @param value
   */
  handleChange(value) {
    const { dispatch } = this.props;
    console.log('Editor change ' + value);
    dispatch({
      type: 'markdownEditor/setContentText',
      payload: value,
    });
  }

  render() {
    const { contentText } = this.props;
    return (
      <Editor
        placeholder={'请输入内容'}
        lineNum={true}
        value={contentText}
        onChange={this.handleChange.bind(this)}
        onSave={this.handleSave.bind(this)}
      />
    );
  }
}

export default MarkdownEditor;
