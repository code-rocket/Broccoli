import React, { Component } from 'react';
import Editor from 'for-editor';

interface MarkdownEditorProps {
  value: string
}

class MarkdownEditor extends Component<MarkdownEditorProps, any> {
  constructor() {
    super();
    this.state = {
      value: '',
    };
  }

  handleSave(value) {
    console.log(value);
    console.log(this.state.value);
  }

  handleChange(value) {
    this.setState({
      value,
    });
  }

  render() {
    const { value } = this.state;
    return (
      <Editor placeholder={'请输入内容'} lineNum={true} value={value} onChange={this.handleChange.bind(this)} onSave={this.handleSave.bind(this)}/>
    );
  }
}

export default MarkdownEditor;
