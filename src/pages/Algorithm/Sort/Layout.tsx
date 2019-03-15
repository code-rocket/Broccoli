import React from 'react';
import { connect } from 'dva';
import { PureComponent } from '@/components/BaseComponent';
import { Row, Col, Card } from 'antd';
import GridContent from '@/components/PageHeaderWrapper/GridContent';
import router from 'umi/router';
import styles from './Layout.less';

export interface SortLayoutProps {
  listLoading: boolean;
}

@connect(({ loading }) => ({
  listLoading: loading.effects['list/fetch'],
}))
class SortLayout extends PureComponent<SortLayoutProps> {
  onTabChange = key => {
    const { match } = this.props;
    switch (key) {
      case 'selectionSort':
        router.push(`${match.url}/selection-sort`);
        break;
      case 'bubbleSortV1':
        router.push(`${match.url}/bubble-sort-v1`);
        break;
      case 'bubbleSortV2':
        router.push(`${match.url}/bubble-sort-v2`);
        break;
      default:
        break;
    }
  };

  render() {
    const { listLoading, match, children } = this.props;
    const operationTabList = [
      {
        key: 'selectionSort',
        tab: (
          <span>
            选择排序 <span style={{ fontSize: 14 }}>(8)</span>
          </span>
        ),
      },
      {
        key: 'bubbleSortV1',
        tab: (
          <span>
            冒泡排序 <span style={{ fontSize: 14 }}>(8)</span>
          </span>
        ),
      },
      {
        key: 'bubbleSortV2',
        tab: (
          <span>
            冒泡排序优化 <span style={{ fontSize: 14 }}>(8)</span>
          </span>
        ),
      },
    ];

    return (
      <GridContent>
        <Row gutter={24}>
          <Col lg={24} md={24}>
            <Card
              className={styles.tabsCard}
              bordered={false}
              tabList={operationTabList}
              activeTabKey={location.pathname.replace(`${match.path}/`, '')}
              onTabChange={this.onTabChange}
              loading={listLoading}
            >
              {children}
            </Card>
          </Col>
        </Row>
      </GridContent>
    );
  }
}

export default SortLayout;
