module.exports = '## 冒泡排序\n' +
  '从前往后，依次比较相邻的两个数，把较大的数放到后面。一次循环，可以在当前最末尾位置得到一个当前最大值\n' +
  '\n' +
  '#### 冒泡排序示例：\n' +
  '```\n' +
  '    /**\n' +
  '     * 冒泡排序 - 普通\n' +
  '     * 在某些时候，循环还未终止，整个数组已经排好序，此时应及时终止循环。\n' +
  '     *（冒泡每次都会比较相邻两个数并交换次序不对的组，若一次循环后，都没进行交换，则已经完成排序）\n' +
  '     * @param arr\n' +
  '     */\n' +
  '    let bubbleSort1 = (arr) => {\n' +
  '        function swap(arr, a, b) {\n' +
  '            let temp = arr[a];\n' +
  '            arr[a] = arr[b];\n' +
  '            arr[b] = temp;\n' +
  '        }\n' +
  '\n' +
  '        console.time(\'冒泡排序耗时\');\n' +
  '        //依次将最大的数放置到数组末尾，将第二大的数放到倒数第二位...\n' +
  '        let isFinish;\n' +
  '        for (let i = 0; i < arr.length; i++) {\n' +
  '            isFinish = true;\n' +
  '            for (let j = 0; j < arr.length; j++) {\n' +
  '                if (arr[j] > arr[j + 1]) {\n' +
  '                    swap(arr, j, j + 1);\n' +
  '                    isFinish = false;\n' +
  '                }\n' +
  '            }\n' +
  '            if (isFinish) {\n' +
  '                break;\n' +
  '            }\n' +
  '        }\n' +
  '        console.timeEnd(\'冒泡排序耗时\');\n' +
  '        return arr;\n' +
  '    };\n' +
  '```\n';
