## 选择排序
从数组中找到最小的元素，和第一个位置的元素互换。
从第二个位置开始，找到最小的元素，和第二个位置的元素互换。
.......  

直到选出array.length-1个较小元素，剩下的最大的元素自动排在最后一位。  

#### 单向选择排序示例：
```
    /**
     * 选择排序 - 单向选择排序
     * @param arr
     * @returns {*}
     */
    let selectionSort = (arr) => {
        console.time('选择排序耗时');
        for (let i = 0; i < arr.length - 1; i++) {
            let minPos = i;
            for (let j = i + 1; j < arr.length; j++) {
                if (arr[j] < arr[minPos]) {
                    minPos = j;
                }
            }
            if (arr[minPos] !== arr[i]) {
                swap(arr, minPos, i);
            }
        }

        function swap(arr, a, b) {
            let temp = arr[a];
            arr[a] = arr[b];
            arr[b] = temp;
        }

        console.timeEnd('选择排序耗时');
        return arr;
    };
```
#### 双向选择排序示例：
```
    /**
     * 选择排序 - 双向选择排序（每次循环，同时选出最大值放在末尾，最小值放在前方）
     * @param arr
     * @returns {*}
     */
    let selectionSort2 = (arr) => {
        console.time('选择排序耗时');
        for (let i = 0; i <= arr.length / 2 - 1; i++) {
            let minPos = i, maxPos = arr.length - i - 1;
            for (let j = i; j < arr.length - i; j++) {
                if (arr[j] < arr[minPos]) {
                    minPos = j;
                }

                if (arr[maxPos] < arr[j]) {
                    maxPos = j;
                }
            }

            if (arr[minPos] !== arr[i]) {
                swap(arr, i, minPos);
            }
            if (arr[maxPos] !== arr[arr.length - i - 1]) {
                if (maxPos === i) {//若当前最大值在循环起始位置，则最大值一定在(1)处被交换到了minPos的位置
                    maxPos = minPos;
                }
                swap(arr, maxPos, arr.length - i - 1);
            }
        }

        function swap(arr, a, b) {
            let temp = arr[a];
            arr[a] = arr[b];
            arr[b] = temp;
        }

        console.timeEnd('选择排序耗时');
        return arr;
    };
```
