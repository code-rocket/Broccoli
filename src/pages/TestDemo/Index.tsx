import React from 'react';
import { connect } from 'dva';
import { Component } from '@/components/BaseComponent';


@connect(({}) => ({}))
class TestMap extends Component {
  componentDidMount() {
    console.log('TestMap - componentDidMount');
    const { children } = this.props;
    console.log(children);
  }

  render() {
    const { children } = this.props;
    return (
      <div>
        <h1>Test - index</h1>
        <span>list......</span>
        <div>{children}</div>
      </div>
    );
  }
}

export default TestMap;
