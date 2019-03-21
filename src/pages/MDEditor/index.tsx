import React from 'react';
import { Modal, Row, Col, Form, Button, Icon } from 'antd';
import { connect } from 'dva';
import { Component } from '@/components/BaseComponent';
import { markdownEditorProps } from '@/types/markdownEditor';

import MarkdownEditor from '@/components/MarkdownEditor';
import DistributeForm from './distributeForm';

const DistributeFormModule = Form.create({ name: 'distribute_form' })(DistributeForm);

@connect(({ markdownEditor }) => ({
  contentText: markdownEditor.contentText,
}))
class MDEditorPage extends Component<markdownEditorProps, any> {
  state = {
    modalType: 'info',
  };

  componentDidMount() {
    console.log('MarkdownEditor - componentDidMount !!!!');
  }

  /**
   * confirm click ok
   * @param value      -  表单数据 data ( 分发路径数据 )
   * @returns {Promise<any>}
   */
  modalHandleOK = value => {
    return new Promise((resolve, reject) => {
      const { dispatch, contentText } = this.props;
      dispatch({
        type: 'library/storeLibraryArticle',
        payload: {
          contentText: contentText,
          pathObj: value,
        },
        callback: res => {
          if (res) {
            console.log('请求完成后返回的结果' + res);
            resolve();
          }
        },
      });
    }).catch(() => console.log('Oops errors!'));
  };

  /**
   * handle save - 将传递到子组件 DistributeFormModule 中的表单提交事件中执行
   * @param e
   * @param value  -  表单数据 data ( 分发路径数据 )
   */
  handleSave = (e, value): void => {
    e.preventDefault();
    Modal[this.state.modalType]({
      title: '确定要提交吗',
      content: '确定要提交吗',
      onOk: () => this.modalHandleOK(value),
      onCancel() {},
    });
  };

  render() {
    return (
      <div>
        <h1>Larbrary-知识库 编辑器</h1>
        <a href="https://www.jianshu.com/p/191d1e21f7ed" target="_blank">
          Markdown 书写规范
        </a>
        <Row>
          <Col span={24}>
            <Button onClick={() => this['child_form'].add()}>
              <Icon type="plus-circle" />
              Add
            </Button>
            <Button
              style={{ marginLeft: 8 }}
              type="danger"
              onClick={() => this['child_form'].handleReset()}
            >
              重置路径
            </Button>
            <Button
              style={{ marginLeft: 8 }}
              type="danger"
              onClick={() => this['child_editor'].handleChange('')}
            >
              清空编辑器
            </Button>
            <Button
              style={{ marginLeft: 8 }}
              type="primary"
              onClick={() => this['child_form'].handleSubmit(event)}
            >
              submit
            </Button>
          </Col>
        </Row>
        <DistributeFormModule
          wrappedComponentRef={form => (this['child_form'] = form)}
          handleSave={this.handleSave}
        />
        <MarkdownEditor
          onRef={ref => (this.child_editor = ref)}
          handleSave={this.handleSave.bind(this)}
        />
      </div>
    );
  }
}

export default MDEditorPage;
