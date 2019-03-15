import React from 'react';
import { connect } from 'dva';
import { Component } from '@/components/BaseComponent';
import { router_interviewMap } from '../../../../config/core/distribute';

@connect(({}) => ({}))
class TestPage2 extends Component {
  componentDidMount() {
    console.log('test-page2');
    console.log(router_interviewMap);
  }

  render() {
    return <div>test-page2</div>;
  }
}

export default TestPage2;
