import React from 'react';
import { connect } from 'dva';
import { Component } from '@/components/BaseComponent';
import { Menu, Icon } from 'antd';
import styles from './index.less';

const SubMenu = Menu.SubMenu;

interface TopMenuProps {
  topMenuActive: string;
  modulesInfo: Array<object>;
}

//connect的作用是将组件和models结合在一起。将models中的state绑定到组件的props中。并提供一些额外的功能，譬如dispatch
@connect(({ menu }) => ({
  topMenuActive: menu.topMenuActive,
}))
class TopMenu extends Component<TopMenuProps, any> {
  state = {
    modulesInfo: [{ name: '知识库', key: 'library' }, { name: 'Demo项目', key: 'demo' }],
  };

  /**
   * topMenuClick
   * @param e
   */
  topMenuClick = e => {
    console.log('click ', e);
    this.setTopMenuActive(e.key); //设置顶部菜单栏 Active 状态
    if (this.state.modulesInfo.some(module => module.key === e.key)) {
      this.toggleSideBar(e.key);
    }
  };

  /**
   * 设置顶部菜单栏 Active 状态
   * @param active
   */
  setTopMenuActive = active => {
    event.preventDefault();
    const { dispatch } = this.props;
    dispatch({
      type: 'menu/setTopMenuActive',
      payload: { active },
    });
  };

  /**
   * 切换模块 - 切换 sidebar
   * @param active
   */
  toggleSideBar = active => {
    event.preventDefault();
    const { dispatch } = this.props;
    dispatch({
      type: 'menu/toggleSideBar',
      payload: { active },
    });
  };

  render() {
    const { topMenuActive } = this.props;
    return (
      <Menu
        onClick={this.topMenuClick}
        selectedKeys={[topMenuActive]}
        mode="horizontal"
        className={styles.TopMenu}
      >
        <Menu.Item key="mail">
          <Icon type="dashboard" />
          主页
        </Menu.Item>
        <SubMenu
          title={
            <span className="submenu-title-wrapper">
              <Icon type="setting" />
              模块切换
            </span>
          }
        >
          {this.state.modulesInfo.map((module: { key: string; name: string }) => (
            <Menu.Item key={module.key}>{module.name}</Menu.Item>
          ))}
        </SubMenu>
      </Menu>
    );
  }
}

export default TopMenu;
