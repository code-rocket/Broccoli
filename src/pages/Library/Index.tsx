import React from 'react';
import { connect } from 'dva';
import { Component } from '@/components/BaseComponent';

@connect(({}) => ({}))
class InterviewMap extends Component {
  componentDidMount() {
    console.log('index - componentDidMount');
  }

  render() {
    return (
      <div>
        <h1>InterviewMap - index</h1>
        <span>list......</span>
      </div>
    );
  }
}

export default InterviewMap;
