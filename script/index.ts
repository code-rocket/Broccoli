// var fs = require("fs");
//
// // 异步读取
// fs.readFile('README.md', function (err, data) {
//   if (err) {
//     return console.error(err);
//   }
//   console.log("异步读取: " + data.toString());
// });
//


// function pickerGenerator(module) {
//   const tester = new RegExp(`^docs/${module}`);
//   console.log(tester);
//   return markdownData => {
//     console.log(markdownData);
//     const { filename } = markdownData.meta;
//     console.log(filename);
//     if (tester.test(filename) && !/\/demo$/.test(path.dirname(filename))) {
//       return {
//         meta: markdownData.meta,
//       };
//     }
//     return null;
//   };
// }
//
// console.log(pickerGenerator('filename')({ meta: { filename: 'filename' } }));
