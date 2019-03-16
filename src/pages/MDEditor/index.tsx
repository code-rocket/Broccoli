import React from 'react';
import { connect } from 'dva';
import { Component } from '@/components/BaseComponent';
import MarkdownEditor from '@/components/MarkdownEditor';

@connect(({}) => ({}))
class SubModule extends Component {
  componentDidMount() {
    console.log('MarkdownEditor - componentDidMount !!!!');
  }

  render() {
    return (
      <div>
        <h1>Larbrary-知识库 编辑器</h1>
        <a href="https://www.jianshu.com/p/191d1e21f7ed" target="_blank">
          Markdown 书写规范
        </a>
        <MarkdownEditor />
      </div>
    );
  }
}

export default SubModule;
