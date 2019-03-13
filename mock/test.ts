import Mock from 'mockjs';

const testContent = {
  type: '',
  list: [],
};

/**
 * mock data
 * @param type
 */
let mockListData = (type) => {
  testContent.list = [];
  testContent.type = type;
  for (let i = 0; i < 8; i++) {
    testContent.list.push(Mock.mock({
      id: '@increment',
      title: '@ctitle',
      content: '@cparagraph(3, 5)',
      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png',
      updateTime: '@date("yyyy-MM-dd HH:mm:ss")',
      star: 123,
      like: 220,
      message: 450,
    }));
  }
};


//GET
function testget(req, res) {
  mockListData('GET');
  res.json({
    status: 200,
    data: testContent,
    message: 'success',
  });
  res.status(200).end();
}

// POST
function testpost(req, res) {
  mockListData('POST');
  res.json({
    status: 200,
    data: testContent,
    message: 'success',
  });
  res.status(200).end();
}
// POST
function testmarkdown(req, res) {
  mockListData('POST');
  res.sendFile({
    status: 200,
    data: testContent,
    message: 'success',
  });
  res.status(200).end();
}

export default {
  'GET /test/get': testget,
  'POST /test/post': testpost,
  'POST /test/markdown': testmarkdown,
};
