import React from 'react';
import { Component } from '@/components/BaseComponent';
import { Row, Col } from 'antd';
import { moduleInfoProps } from '@/types/library';
import { recombinate } from './units';
import SubModule from './SubModule';

export interface LibraryLayoutProps {
  validInfo: moduleInfoProps;
}

class LibraryLayout extends Component<LibraryLayoutProps, any> {
  constructor(props) {
    super(props);
    this.state = {
      validInfo: this.getValidInfofromRoute(props.route),
    };
  }

  componentWillMount() {
    console.log('SortLayout - componentWillMount');
  }

  componentDidMount() {}

  /**
   * get valid information from route information
   * @param route
   * @returns {any}
   */
  getValidInfofromRoute(route) {
    try {
      if (!route) return {};
      return recombinate(route);
    } catch (e) {
      return {};
    }
  }

  render() {
    const { validInfo } = this.state;
    return (
      <Row gutter={24} className={'LibraryLayout'}>
        <Col lg={24} md={24}>
          <SubModule moduleInfo={validInfo} />
        </Col>
      </Row>
    );
  }
}

export default LibraryLayout;
