import React from 'react';
import { connect } from 'dva';
import { Component } from '@/components/BaseComponent';


@connect(({}) => ({}))
class SelectionSort extends Component {
  componentDidMount() {
    console.log('componentDidMount');


    class Point {
      x: number;
      y: number;
    }

    interface Point3d extends Point {
      z: number;
    }

    let point3d: Point3d = { x: 1, y: 2, z: 3 };

    console.log(point3d);



  }

  render() {
    return <div>selection-sort</div>;
  }
}

export default SelectionSort;
