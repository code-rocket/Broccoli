import React from 'react';
import { WrappedFormUtils } from 'antd/es/form/Form';
import { match } from 'react-router';
import { Dispatch } from 'redux';

export interface Props {
  dispatch?: Dispatch<any>;
  form?: WrappedFormUtils;
  match?: match;
}

// PureComponent不仅会影响本身，而且会影响子组件，所以PureComponent最佳情况是展示组件
// 若是数组和对象等引用类型，则要引用不同，才会渲染
// 如果prop和state每次都会变，那么PureComponent的效率还不如Component，因为你知道的，进行浅比较也是需要时间
// 若有shouldComponentUpdate，则执行它，若没有这个方法会判断是不PureComponent，若是，进行浅比较
//就是不要在PureComponent中使用shouldComponentUpdate，因为根本没有必要
export class Component<P = {}, S = {}> extends React.Component<P & Props, S> {}

export class PureComponent<P = {}, S = {}> extends React.PureComponent<P & Props, S> {}
