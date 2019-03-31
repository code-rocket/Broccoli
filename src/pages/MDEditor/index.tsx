import React from 'react';
import { Modal, Row, Col, Button, Icon } from 'antd';
import { connect } from 'dva';
import { createForm } from 'rc-form';
import { Component } from '@/components/BaseComponent';
import { markdownEditorProps } from '@/types/markdownEditor';

import MarkdownEditor from '@/components/MarkdownEditor';
import DistributeForm from './distributeForm';

const DistributeFormModule = connect(state => {
  return {
    fileExt: state.markdownEditor.fileExt,
    pathPrefix: state.markdownEditor.pathPrefix,
    contentInfo: state.markdownEditor.contentInfo,
  };
})(
  createForm({
    name: 'distribute_form',
  })(DistributeForm)
);

@connect(({ markdownEditor }) => ({
  contentText: markdownEditor.contentText,
}))
class MDEditorPage extends Component<markdownEditorProps, any> {
  constructor(props) {
    super(props);
    this.state = {
      isExists: true,
    };
  }

  componentDidMount() {
    console.log('MarkdownEditor - componentDidMount !!!!');
    // console.log(this.props.location);
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
    }).catch(() => console.log('error'));
  };

  /**
   * handle save - 将传递到子组件 DistributeFormModule 中的表单提交事件中执行
   * @param e
   * @param value  -  表单数据 data ( 分发路径数据 )
   */
  handleSave = (e, value): void => {
    e.preventDefault();
    Modal.confirm({
      title: '确定要提交吗',
      content: this.state.isExists ? '已存在该文件，确认覆盖吗' : null,
      onOk: () => this.modalHandleOK(value),
      onCancel() {},
    });
  };

  /**
   * handle check - 检查library 图书馆中是否存在同路径同名的文件
   * @param e
   * @param value
   * @returns {Promise<any>}
   */
  handleCheck = (e, value) => {
    console.log('check123131');
    console.log(value);
    e.preventDefault();
    return new Promise((resolve, reject) => {
      try {
        this.props.dispatch({
          type: 'library/islibraryFileExists',
          payload: value,
          callback: res => {
            this.setState({
              isExists: res,
            });
            resolve(this.state.isExists);
          },
        });
      } catch (e) {
        reject(e);
      }
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
            <Button onClick={() => window.history.back()}>
              <Icon type="rollback" />
              返回
            </Button>
            <Button style={{ marginLeft: 8 }} onClick={() => this['child_form'].add()}>
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
            <Button
              style={{ marginLeft: 8 }}
              type="primary"
              onClick={() => this['child_form'].handleSubmit(event, 'check')}
            >
              check
            </Button>
          </Col>
        </Row>

        <DistributeFormModule
          wrappedComponentRef={form => (this['child_form'] = form)}
          handleSave={this.handleSave}
          handleCheck={this.handleCheck}
        />

        <MarkdownEditor
          onRef={ref => (this.child_editor = ref)}
          handleSave={() => this['child_form'].handleSubmit(event)}
        />
      </div>
    );
  }
}

export default MDEditorPage;
