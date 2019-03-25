import React from 'react';
import { connect } from 'dva';
import { Component } from '@/components/BaseComponent';

@connect(({}) => ({}))
class TestPage2 extends Component {
  componentDidMount() {
    console.log('test-page2');
  }

  render() {
    return <div>test-page2</div>;
  }
}

export default TestPage2;
