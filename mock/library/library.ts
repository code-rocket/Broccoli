import { readFile, createFile, judgeFileExists } from './utils';

// POST
function getContentTextFromMD(req, res) {
  const filepath = req.body.path; //path for article in library store

  setTimeout(() => {
    res.json({
      status: 200,
      data: readFile(filepath),
      // replaceMark(require(`../Library/Modules/${path}`), defaultOpt)
      message: 'success',
    });

    res.status(200).end();
  }, 800);
}

function storeContentTextToLibrary(req, res) {
  const td = createFile(req.body);

  setTimeout(() => {
    res.json({
      status: 200,
      data: td,
      message: td ? 'success' : 'error',
    });

    res.status(200).end();
  }, 600);
}

function islibraryFileExists(req, res) {
  const isExists = judgeFileExists(req.body);
  setTimeout(() => {
    res.json({
      status: 200,
      data: isExists,
      message: isExists ? 'success' : 'error',
    });

    res.status(200).end();
  }, 200);
}

export default {
  'POST /libary/interview/article': getContentTextFromMD,
  'POST /libary/interview/store': storeContentTextToLibrary,
  'POST /libary/interview/isexists': islibraryFileExists,
};
