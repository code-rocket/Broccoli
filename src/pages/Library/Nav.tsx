import React from 'react';
import { connect } from 'dva';
import { Component } from '@/components/BaseComponent';


@connect(({}) => ({}))
class InterviewMap extends Component {
  componentDidMount() {
    console.log('Nav - componentDidMount');

  }

  render() {
    return (
      <div>
        <h1>InterviewMap - Nav</h1>
        <span>list......</span>
      </div>
    );
  }
}

export default InterviewMap;
