import React from 'react';
import { Form, Row, Col, Input, Icon, Modal } from 'antd';
import { connect } from 'dva';
import { Component } from '@/components/BaseComponent';
import styles from './distributeForm.less';

interface DistributeFormProps {
  fileExt: Array<string>;
  handleSave: Function; //外部传入的提交保存事件
  handleCheck: Function; //外部传入的提交保存事件
}

connect(({ markdownEditor }) => ({
  contentText: markdownEditor.contentText,
}));

let id = 0;

class DistributeForm extends Component<DistributeFormProps> {
  state = {
    fileExt: ['md'], //文件名称- 合法后缀
  };

  componentDidMount() {
    console.log('distributeForm - componentDidMount !!!!');
    // this.props.onRef(this);
    this.initFormField(1);
  }

  validateFilename = (rule, value, callback) => {
    if (!value) {
      callback('请输入文件名称');
    } else {
      const FileExt = value.replace(/.+\./, '');
      if (!this.state.fileExt.some(e => e === FileExt)) {
        callback('请输入正确后缀的文件名称');
      }
      callback();
    }
  };

  /**
   * init form field
   * @param count
   */
  initFormField(count: number = 1) {
    let i = 0;
    while (i < count) {
      this.add();
      i++;
    }
  }

  /**
   * add one input field
   */
  add = () => {
    const { form } = this.props;
    // can use data-binding to get
    const keys = form.getFieldValue('keys');
    const nextKeys = keys.concat(id++);
    // can use data-binding to set
    // important! notify form to detect changes
    form.setFieldsValue({
      keys: nextKeys,
    });
  };

  /**
   *  remove one input field
   */
  remove = k => {
    const { form } = this.props;
    // can use data-binding to get
    const keys = form.getFieldValue('keys');
    // We need at least one passenger
    if (keys.length === 1) {
      return;
    }

    // can use data-binding to set
    form.setFieldsValue({
      keys: keys.filter(key => key !== k),
    });
  };

  /**
   * form submit
   * @param e
   * @param {string} type
   */
  handleSubmit = (e, type: string = 'submit') => {
    this.props.form.validateFields(
      (err: any, values: object): void => {
        if (!err) {
          console.log('Received values of form: ', values);
          if (type === 'submit') {
            //handle save data - Merge editor data and submit it to background
            this.props
              .handleCheck(e, values)
              .then(() => {
                this.props.handleSave(e, values);
              })
              .catch(err => {
                console.log(err);
              });
          } else if (type === 'check') {
            this.props.handleCheck(e, values).then(isExists => {
              Modal.info({
                title: '检查搜索结果',
                content: isExists ? '已存在该文件' : '不存在该文件',
              });
            });
          }
        }
      }
    );
  };

  /**
   * form data reset
   */
  handleReset = () => {
    this.props.form.resetFields();

    this.initFormField(1); //init form field
  };

  render() {
    const { getFieldDecorator, getFieldValue } = this.props.form;
    getFieldDecorator('keys', { initialValue: [] });
    const keys = getFieldValue('keys');
    const col = { lg: 8, md: 12, sm: 12, xs: 24 };
    const formItems = keys.map((k, index) => (
      <Col {...col} key={index} style={{ paddingRight: '22px' }}>
        <Form.Item label={`路径 ${index + 1}`} key={k} hasFeedback>
          {getFieldDecorator(`path-${index + 1}`, {
            validateTrigger: ['onChange', 'onBlur'],
            rules: [
              {
                required: true,
                whitespace: true,
                message: `${index + 1}级目录为空`,
              },
            ],
          })(<Input placeholder="请输入" />)}
          {keys.length !== 1 && index + 1 === keys.length ? (
            <Icon
              className="dynamic-delete-button"
              type="minus-circle-o"
              onClick={() => this.remove(k)}
            />
          ) : null}
        </Form.Item>
      </Col>
    ));

    return (
      <Form className={styles['library-distribute-form']} onSubmit={this.handleSubmit}>
        <Row gutter={16}>
          {formItems}
          <Col {...col} style={{ paddingRight: '22px' }}>
            <Form.Item label={'文件名'} hasFeedback>
              {getFieldDecorator('filename', {
                validateTrigger: ['onChange', 'onBlur'],
                rules: [
                  {
                    required: true,
                    whitespace: true,
                    validator: this.validateFilename,
                  },
                ],
              })(<Input placeholder="请输入" />)}
            </Form.Item>
          </Col>
        </Row>
      </Form>
    );
  }
}

export default DistributeForm;
