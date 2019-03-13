## 冒泡排序
从前往后，依次比较相邻的两个数，把较大的数放到后面。一次循环，可以在当前最末尾位置得到一个当前最大值

#### 冒泡排序示例：
```
    /**
     * 冒泡排序 - 普通
     * 在某些时候，循环还未终止，整个数组已经排好序，此时应及时终止循环。
     *（冒泡每次都会比较相邻两个数并交换次序不对的组，若一次循环后，都没进行交换，则已经完成排序）
     * @param arr
     */
    let bubbleSort1 = (arr) => {
        function swap(arr, a, b) {
            let temp = arr[a];
            arr[a] = arr[b];
            arr[b] = temp;
        }

        console.time('冒泡排序耗时');
        //依次将最大的数放置到数组末尾，将第二大的数放到倒数第二位...
        let isFinish;
        for (let i = 0; i < arr.length; i++) {
            isFinish = true;
            for (let j = 0; j < arr.length; j++) {
                if (arr[j] > arr[j + 1]) {
                    swap(arr, j, j + 1);
                    isFinish = false;
                }
            }
            if (isFinish) {
                break;
            }
        }
        console.timeEnd('冒泡排序耗时');
        return arr;
    };
```
