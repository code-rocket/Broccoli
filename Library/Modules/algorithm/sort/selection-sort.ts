module.exports =
  '## 选择排序\n' +
  '从数组中找到最小的元素，和第一个位置的元素互换。\n' +
  '从第二个位置开始，找到最小的元素，和第二个位置的元素互换。\n' +
  '.......  \n' +
  '\n' +
  '直到选出array.length-1个较小元素，剩下的最大的元素自动排在最后一位。  \n' +
  '\n' +
  '#### 单向选择排序示例：\n' +
  '```\n' +
  '    /**\n' +
  '     * 选择排序 - 单向选择排序\n' +
  '     * @param arr\n' +
  '     * @returns {*}\n' +
  '     */\n' +
  '    let selectionSort = (arr) => {\n' +
  "        console.time('选择排序耗时');\n" +
  '        for (let i = 0; i < arr.length - 1; i++) {\n' +
  '            let minPos = i;\n' +
  '            for (let j = i + 1; j < arr.length; j++) {\n' +
  '                if (arr[j] < arr[minPos]) {\n' +
  '                    minPos = j;\n' +
  '                }\n' +
  '            }\n' +
  '            if (arr[minPos] !== arr[i]) {\n' +
  '                swap(arr, minPos, i);\n' +
  '            }\n' +
  '        }\n' +
  '\n' +
  '        function swap(arr, a, b) {\n' +
  '            let temp = arr[a];\n' +
  '            arr[a] = arr[b];\n' +
  '            arr[b] = temp;\n' +
  '        }\n' +
  '\n' +
  "        console.timeEnd('选择排序耗时');\n" +
  '        return arr;\n' +
  '    };\n' +
  '```\n' +
  '#### 双向选择排序示例：\n' +
  '```\n' +
  '    /**\n' +
  '     * 选择排序 - 双向选择排序（每次循环，同时选出最大值放在末尾，最小值放在前方）\n' +
  '     * @param arr\n' +
  '     * @returns {*}\n' +
  '     */\n' +
  '    let selectionSort2 = (arr) => {\n' +
  "        console.time('选择排序耗时');\n" +
  '        for (let i = 0; i <= arr.length / 2 - 1; i++) {\n' +
  '            let minPos = i, maxPos = arr.length - i - 1;\n' +
  '            for (let j = i; j < arr.length - i; j++) {\n' +
  '                if (arr[j] < arr[minPos]) {\n' +
  '                    minPos = j;\n' +
  '                }\n' +
  '\n' +
  '                if (arr[maxPos] < arr[j]) {\n' +
  '                    maxPos = j;\n' +
  '                }\n' +
  '            }\n' +
  '\n' +
  '            if (arr[minPos] !== arr[i]) {\n' +
  '                swap(arr, i, minPos);\n' +
  '            }\n' +
  '            if (arr[maxPos] !== arr[arr.length - i - 1]) {\n' +
  '                if (maxPos === i) {//若当前最大值在循环起始位置，则最大值一定在(1)处被交换到了minPos的位置\n' +
  '                    maxPos = minPos;\n' +
  '                }\n' +
  '                swap(arr, maxPos, arr.length - i - 1);\n' +
  '            }\n' +
  '        }\n' +
  '\n' +
  '        function swap(arr, a, b) {\n' +
  '            let temp = arr[a];\n' +
  '            arr[a] = arr[b];\n' +
  '            arr[b] = temp;\n' +
  '        }\n' +
  '\n' +
  "        console.timeEnd('选择排序耗时');\n" +
  '        return arr;\n' +
  '    };\n' +
  '```\n';
