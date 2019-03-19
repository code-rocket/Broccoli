## 冒泡排序优化
代码优化:  

*  在某些时候，循环还未终止，整个数组已经排好序，此时应及时终止循环。（冒泡每次都会比较相邻两个数并交换次序不对的组，若一次循环后，都没进行交换，则已经完成排序）。  
*  鸡尾酒是冒泡排序的升级版，该排序从左往右找出最大值后，再从右往左找出最小值，类似鸡尾酒搅拌左右循环。在某些情况下，优于冒泡排序，以序列(2,3,4,5,1)为例，鸡尾酒排序只需要访问两次（升序降序各一次 ）次序列就可以完成排序，但如果使用冒泡排序则需要四次。
 
#### 冒泡排序优化示例：
```
    /**
     * 冒泡排序 - 升级版 - CockTail
     * 鸡尾酒是冒泡排序的升级版，该排序从左往右找出最大值后，再从右往左
     * 找出最小值，类似鸡尾酒搅拌左右循环。在某些情况下，优于冒泡排序，
     * 以序列(2,3,4,5,1)为例，鸡尾酒排序只需要访问两次（升序降序各一次 ）
     * 次序列就可以完成排序，但如果使用冒泡排序则需要四次。
     * @param arr
     */
    let bubbleSort2 = (arr) => {
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
            //从前往后,比较相邻两个数,把大的放在后边.之前已放置成功的可以不再参与比较
            for (let j = i; j < arr.length - i; j++) {
                if (arr[j] > arr[j + 1]) {
                    swap(arr, j, j + 1);
                    isFinish = false;
                }
            }
            if (isFinish) {
                break;
            }
            for (let j = arr.length - i; j > i; j--) {
                if (arr[j] < arr[j - 1]) {
                    swap(arr, j, j - 1);
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
