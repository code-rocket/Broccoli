import React from 'react';
import { Card, Icon } from 'antd';
import { Link } from 'react-router-dom';
import { Component } from '@/components/BaseComponent';
import CodeBlock from '@/components/CodeBlock';
import { moduleInfoProps, libraryModelProps } from '@/types/library';
import { connect } from 'dva';

export interface SubModuleProps {
  libraryLoading?: boolean;
  articleStore: libraryModelProps;
  moduleInfo: moduleInfoProps;
}

//connect的作用是将组件和models结合在一起。将models中的state绑定到组件的props中。并提供一些额外的功能，譬如dispatch
@connect(({ library, loading }) => ({
  articleStore: library.articleStore,
  libraryLoading: loading.effects['library/getLibraryData'], //loading的effects对象里面的key就是异步请求的action名
}))
class SubModule extends Component<SubModuleProps> {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    console.log('SubModule - componentDidMount');
    this.requestArticle(); //request article data from library
  }

  /**
   * request article data from library
   */
  requestArticle = (): void => {
    const { dispatch, moduleInfo } = this.props;
    dispatch({
      type: 'library/getLibraryData',
      payload: { libkey: moduleInfo.key, path: moduleInfo.path },
    });
  };

  /**
   * filter article form article store
   * @param store     article store
   * @param info     module info
   * @returns {any}
   */
  handleArticle = (store, info) => {
    try {
      return store['filter'](art => info.key in art)[0][info.key];
    } catch (e) {
      return '';
    }
  };

  /**
   * card content edit - jump to '/MD/MDEdit' markdown editor
   */
  cardEdit() {
    const { dispatch, articleStore, moduleInfo } = this.props;
    const article = this.handleArticle(articleStore, moduleInfo);

    // //set content information from markdown edit
    dispatch({
      type: 'markdownEditor/setContentInfo',
      payload: moduleInfo,
    });
    //set content text from markdown edit
    dispatch({
      type: 'markdownEditor/setContentText',
      payload: article,
    });
  }

  render() {
    const { libraryLoading, articleStore, moduleInfo } = this.props;
    const article = this.handleArticle(articleStore, moduleInfo);

    return (
      <Card
        title={moduleInfo.zh || 'Default Card Title'}
        loading={libraryLoading}
        extra={
          <Link
            to={{ pathname: '/MD/MDEdit', state: { a: 1 }, search: '?some=search-string' }}
            onClick={this.cardEdit.bind(this)}
          >
            <Icon type="edit" style={{ margin: '0 5px' }} />
            <span>{'Edit'}</span>
          </Link>
        }
        style={{ marginTop: 16 }}
      >
        <CodeBlock content={article} />
      </Card>
    );
  }
}

export default SubModule;
