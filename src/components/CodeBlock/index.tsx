import React from 'react';
import { Empty, Button } from 'antd';
import { PureComponent } from '@/components/BaseComponent';
import hljs from 'highlight.js';
import myMarked from 'marked';
import HighlighterWords from 'react-highlight-words';
import 'highlight.js/styles/androidstudio.css';
import styles from './index.less';

myMarked.setOptions({
  renderer: new myMarked.Renderer(),
  highlight: function(code) {
    return hljs.highlightAuto(code).value;
  },
  pedantic: false,
  gfm: true, //允许 Git Hub标准的markdown.
  tables: true, //允许支持表格语法。该选项要求 gfm 为true。
  breaks: false, //允许回车换行。该选项要求 gfm 为true。
  sanitize: false, //对输出进行过滤（清理），将忽略任何已经输入的html代码（标签）
  smartLists: true, //使用比原生markdown更时髦的列表。 旧的列表将可能被作为pedantic的处理内容过滤掉.
  smartypants: false, //使用更为时髦的标点，比如在引用语法中加入破折号。
  xhtml: false,
});

export interface LibraryProps {
  content?: string;
}

class CodeBlock extends PureComponent<LibraryProps, any> {
  componentDidMount() {
    console.log('CodeBlock - componentDidMount');
  }

  componentDidUpdate(nextProps) {}

  render() {
    const { content } = this.props;
    return (
      <div>
        {content ? (
          <div
            className={styles['code-block']}
            dangerouslySetInnerHTML={{ __html: myMarked(content) }}
          />
        ) : (
          <Empty
            image="https://gw.alipayobjects.com/mdn/miniapp_social/afts/img/A*pevERLJC9v0AAAAAAAAAAABjAQAAAQ/original"
            description={
              <span>
                Customize <a href="#API">Description</a>
              </span>
            }
          >
            <Button type="primary">Create Now</Button>
          </Empty>
        )}
      </div>
    );
  }
}

export default CodeBlock;

{
  /*<HighlighterWords*/
}
{
  /*highlightClassName="YourHighlightClass"*/
}
{
  /*searchWords={['and', 'or', 'the']}*/
}
{
  /*autoEscape={true}*/
}
{
  /*textToHighlight="The dog is chasing the cat. Or perhaps they're just playing?"*/
}
{
  /*/>*/
}
