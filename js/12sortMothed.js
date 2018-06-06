/**
 * Created by zhouli on 18/6/6
 */
//产生随机数
function CArray(numElements) {
    this.dataStore = [];
    this.pos = 0;
    this.numElements = numElements;
    this.insert = function insert(element) {
        this.dataStore[this.pos++] = element;
    };
    this.toString = function toString() {
        var retstr = "";
        for (var i = 0; i < this.dataStore.length; ++i) {
            retstr += this.dataStore[i] + " ";
            if (i > 0 && i % 10 == 0) {
                retstr += "\n";
            }
        }
        return retstr;
    };
    this.clear = function clear() {
        for (var i = 0; i < this.dataStore.length; ++i) {
            this.dataStore[i] = 0;
        }
    };
    this.setData = function setData() {
        for (var i = 0; i < this.numElements; ++i) {
            this.dataStore[i] = Math.floor(Math.random() * (this.numElements + 1));
        }
    }
    ;
    this.swap = function swap(arr, index1, index2) {
        var temp = arr[index1];
        arr[index1] = arr[index2];
        arr[index2] = temp;
    };
    //冒泡排序
    //挨个比较（不要与自己比较），发现比自己大的就交换位置，（最终从大到小）
    //挨个比较（不要与自己比较），发现比自己小的就交换位置，（最终从小到大）
    this.bubbleSort = function bubbleSort() {
        var numElements = this.dataStore.length;
        for (var outer = numElements; outer >= 2; --outer) {
            for (var inner = 0; inner <= outer - 1; ++inner) {
                if (this.dataStore[inner] > this.dataStore[inner + 1]) {
                    this.swap(this.dataStore, inner, inner + 1);
                }
            }
        }
    }

    //选择排序
    //选择一个最小的（假设第一个最小），挨个比较，发现有比自己更小的就换位置；然后进入下次循环 （最终从小到大）
    //选择一个最大的（假设第一个最大），挨个比较，发现有比自己更大的就换位置；然后进入下次循环 （最终从大到小）
    this.selectionSort = function selectionSort() {
        var min, temp;
        for (var outer = 0; outer <= this.dataStore.length - 2; ++outer) {
            min = outer;
            for (var inner = outer + 1; inner <= this.dataStore.length - 1; ++inner) {
                if (this.dataStore[inner] < this.dataStore[min]) {
                    min = inner;
                }
                this.swap(this.dataStore, outer, min);
            }
        }
    }
    //插入排序
    // 1〉从第一个元素开始，该元素可以认为已经被排序
    // 2〉取出第一个未排序元素存放在临时变量temp中，在已经排序的元素序列中从后往前扫描，逐一比较
    // 3〉如果temp小于已排序元素，将该元素移到下个位置
    // 4〉重复步骤3〉，直到找到已排序的元素小于或者等于

    //所以选择排序的比较次数是固定的，而插入不是固定的，那些可能被省掉的操作就是变快的部分
    this.insertionSort = function insertionSort() {
        var temp, inner;
        for (var outer = 1; outer <= this.dataStore.length - 1; ++outer) {
            temp = this.dataStore[outer];
            inner = outer;
            while (inner > 0 && (this.dataStore[inner - 1] >= temp)) {
                this.dataStore[inner] = this.dataStore[inner - 1];
                --inner;
            }
            this.dataStore[inner] = temp;
        }
    }

    //希尔排序，多路间隔两两比较元素，发现比较自己大的就交换
    //静态间隔序列
    this.gaps = [5, 3, 1];
    this.shellsort = function shellsort() {
        for (var g = 0; g < this.gaps.length; ++g) {
            for (var i = this.gaps[g]; i < this.dataStore.length; ++i) {
                var temp = this.dataStore[i];
                for (var j = i; j >= this.gaps[g] && this.dataStore[j - this.gaps[g]] > temp; j -= this.gaps[g]) {
                    this.dataStore[j] = this.dataStore[j - this.gaps[g]];
                }
                this.dataStore[j] = temp;
            }
        }
    }

    //希尔排序，多路间隔两两比较元素，发现比较自己大的就交换
    //动态计算间隔序列
    this.shellsort1 = function shellsort1() {
        var N = this.dataStore.length;
        var h = 1;
        while (h < N / 3) {
            h = 3 * h + 1;
        }
        while (h >= 1) {
            for (var i = h; i < N; i++) {
                for (var j = i; j >= h && this.dataStore[j] < this.dataStore[j - h];
                     j -= h) {
                    this.swap(this.dataStore, j, j - h);
                }
            }
            h = (h - 1) / 3;
        }
    }

    //快速排序，递归的思想
    //选择一个数作为基准，分成左右两部分，分别排序，对左右两部分再次循环
    this.qSort = function qSort(arr) {
        var arr = arr || this.dataStore;
        if (arr.length == 0) {
            return [];
        }
        var left = [];
        var right = [];
        var pivot = arr[0];
        for (var i = 1; i < arr.length; i++) {
            if (arr[i] < pivot) {
                left.push(arr[i]);
            } else {
                right.push(arr[i]);
            }
        }
        return qSort(left).concat(pivot, qSort(right));
    }

    //归并排序
    this.mergeSort = function mergeSort(arr) {
        var arr = arr || this.dataStore;
        if (arr.length < 2) {
            return;
        }
        var step = 1;
        var left, right;
        while (step < arr.length) {
            left = 0;
            right = step;
            while (right + step <= arr.length) {
                mergeArrays(arr, left, left+step, right, right+step);
                left = right + step;
                right = left + step;
            }
            if (right < arr.length) {
                mergeArrays(arr, left, left+step, right, arr.length);
            }
            step *= 2;
        }
    }

    function mergeArrays(arr, startLeft, stopLeft, startRight, stopRight) {
        var rightArr = new Array(stopRight - startRight + 1);
        var leftArr = new Array(stopLeft - startLeft + 1);
        k = startRight;
        for (var i = 0; i < (rightArr.length-1); ++i) {
            rightArr[i] = arr[k];
            ++k;
        }

        k = startLeft;
        for (var i = 0; i < (leftArr.length-1); ++i) {
            leftArr[i] = arr[k];
            ++k;
        }
        rightArr[rightArr.length-1] = Infinity; // a sentinel value
        leftArr[leftArr.length-1] = Infinity; // a sentinel value
        var m = 0;
        var n = 0;
        for (var k = startLeft; k < stopRight; ++k) {
            if (leftArr[m] <= rightArr[n]) {
                arr[k] = leftArr[m];
                m++;
            }
            else {
                arr[k] = rightArr[n];
                n++;
            }
        }
        console.log("left array - ", leftArr);
        console.log("right array - ", rightArr);
    }


    for (var i = 0; i < numElements; ++i) {
        this.dataStore[i] = i;
    }
}






