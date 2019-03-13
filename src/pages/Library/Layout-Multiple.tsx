import React from 'react';
import { Component } from '@/components/BaseComponent';
import { Row, Col, Tabs, Radio, Icon } from 'antd';
import router from 'umi/router';
import { routeKeyType } from '@/types/route';
import { moduleInfoProps } from '@/types/library';
import { recombinate } from './units';
import SubModule from './SubModule';

const TabPane = Tabs.TabPane;

export interface LibraryLayoutProps {
  activeKey: string
  defaultActiveKey: string
  defaultActiveIndex: number
  mode: string,
  route: routeKeyType
  tabList: Array<moduleInfoProps>,
}


//接口，代表传入的props每个参数的类型
class LibraryLayout extends Component<LibraryLayoutProps, any> {
  constructor(props) {
    super(props);
    this.state = {
      title: props.route.meta.zh,
      mode: 'top',
      activeKey: '',
      defaultActiveIndex: 0,//tab 页默认选中索引值
      defaultActiveKey: null,
      tabList: this.getTabListfromRoute(props.route),
    };
  }

  componentWillMount() {
    console.log('SortLayout - componentWillMount');
    const { tabList, defaultActiveIndex } = this.state;
    this.setState({
      defaultActiveKey: tabList[defaultActiveIndex].key,
    });
  }

  componentDidMount() {

  }

  /**
   * get tab-list from route information
   * @param route
   * @returns {any}
   */
  getTabListfromRoute(route) {
    try {
      if (!route.routes && route.routes.length === 0) return [];
      return route.routes.filter(child => child.name).map(child => {
        return recombinate(child);
      });
    }
    catch (e) {
      return [];
    }
  }

  /**
   * change tab mode
   * @param e
   */
  tabModeChange = (e) => {
    const mode = e.target.value;
    this.setState({ mode });
  };

  /**
   * tab click event
   * @param key     tab - key
   */
  onTabClick = (key) => {
    this.setState({
      activeKey: key,
    });
    const { match } = this.props;
    router.push({ pathname: `${match.url}/${key}`, search: `?key=${key}` });
  };


  render() {
    const { match } = this.props;
    const { title, mode, tabList, defaultActiveKey } = this.state;
    return (
      <Row gutter={24} className={'LibraryLayout'}>
        <Col lg={24} md={24}>
          <h1>{title}</h1>
          <div style={{ textAlign: 'right' }}>
            <Radio.Group onChange={this.tabModeChange} value={mode} style={{ marginBottom: 8 }}>
              <Radio.Button value="top">Horizontal</Radio.Button>
              <Radio.Button value="right">Vertical</Radio.Button>
            </Radio.Group>
          </div>
          <Tabs
            activeKey={location.pathname.replace(`${match.path}/`, '')}
            defaultActiveKey={defaultActiveKey}
            tabPosition={mode}
            type="card"
            style={{ height: 'auto', minHeight: '600' }}
            onTabClick={this.onTabClick}
          >
            {
              tabList.map((i: moduleInfoProps) => {
                return <TabPane tab={<span><Icon type={i.icon}/>{i.tab}</span>} key={i.key}>
                  <SubModule moduleInfo={i}/>
                </TabPane>;
              })
            }
          </Tabs>
        </Col>
      </Row>
    );
  }
}

export default LibraryLayout;
