import React from 'react';
import { connect } from 'dva';
import { Component } from '@/components/BaseComponent';
import ArticleListContent from '@/components/ArticleListContent';
import { List, Button, Row, Col } from 'antd';
import styles from './Layout.less';

export interface TestPage1Props {
  testContent: { list: any[], type: string };
}

@connect(({ testServer }) => ({
  testContent: testServer.testContent,
}))

class TestPage1 extends Component<TestPage1Props, any> {
  componentDidMount() {
    console.log('componentDidMount', this.props.testContent);
  }

  handleSubmit = (type) => {
    event.preventDefault();
    const { dispatch } = this.props;
    dispatch({
      type: type === 'GET' ? 'testServer/testGetEvent' : 'testServer/testPostEvent',
    });
  };

  render() {
    const { testContent } = this.props;
    const { list, type } = testContent;
    return (
      <div className={styles['ant-win']}>
        <h1>Test-page1</h1>
        <Row gutter={16}>
          <Col span={12} className={styles['ant-col-center']}>
            <Button type="primary" htmlType="submit" onClick={() => this.handleSubmit('GET')}>点击测试GET</Button>
          </Col>
          <Col span={12} className={styles['ant-col-center']}>
            <Button type="dashed" htmlType="submit" onClick={() => this.handleSubmit('POST')}>点击测试POST</Button>
          </Col>
        </Row>
        <h1>{type}</h1>
        <List
          size="large"
          className={styles.articleList}
          rowKey="id"
          itemLayout="vertical"
          dataSource={list}
          renderItem={(item) => (
            <List.Item
              key={item.id}
            >
              <List.Item.Meta
                title={
                  <a className={styles.listItemMetaTitle} href={item.href}>
                    {item.title}
                  </a>
                }
              />
              <ArticleListContent data={item}/>
            </List.Item>
          )}
        />
      </div>
    )
  }
}

export default TestPage1;
