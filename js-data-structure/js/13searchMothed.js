//是否在数组里面
function seqSearch(arr, data) {
   for (var i = 0; i < arr.length; ++i) {
      if (arr[i] == data) {
         return true;
      }
   }
   return false;
}

//数据在数组里面对于的序号
function seqSearchIndex(arr, data) {
    for (var i = 0; i < arr.length; ++i) {
        if (arr[i] == data) {
            return i;
        }
    }
    return -1;
}


//查找最小数
function findMin(arr) {
    var min = arr[0];
    for (var i = 1; i < arr.length; ++i) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}

//查找最大数
function findMax(arr) {
    var max = arr[0];
    for (var i = 1; i < arr.length; ++i) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
//交互顺序
function swap(arr,originIndex,targetIndex) {
    var temp = arr[originIndex];
    arr[originIndex] = arr[targetIndex];
    arr[targetIndex] = temp;
}
//自组织：把活跃数据提前
function seqSearchOrg2(arr, data) {
    for (var i = 0; i < arr.length; ++i) {
        if (arr[i] == data && i > (arr.length * 0.2)) {
            swap(arr,i,0);
            return true;
        } else if (arr[i] == data) {
            return true;
        }
    }
    return false;
}
//自组织：把活跃数据提前
function seqSearchOrg1(arr, data) {
    for (var i = 0; i < arr.length; ++i) {
        if (arr[i] == data) {
            if (i > 0) {
                swap(arr,i,i-1);
            }
            return true;
        }
    }
    return false;
}
//二分查找:针对有序的数组
function binSearch(arr, data) {
    var upperBound = arr.length-1;
    var lowerBound = 0;
    while (lowerBound <= upperBound) {
        var mid = Math.floor((upperBound + lowerBound) / 2);
        console.log("Current midpoint: " + mid);
        if (arr[mid] < data) {
            lowerBound = mid + 1;
        }
        else if (arr[mid] > data) {
            upperBound = mid - 1;
        } else {
            return mid;
        }
    }
    return -1;
}
// 计算重复次数
//二分查找出目标值后，需要查找这个目标值的前后位置，是否有重复的值
function count(arr, data) {
    var count = 0;
    var position = binSearch(arr, data);
    console.log(position)
    if (position > -1) {
        ++count;
        for (var i = position - 1; i > 0; --i) {
            if (arr[i] == data) {
                ++count;
            } else {
                break;
            }
        }
        for (var i = position + 1; i < arr.length; ++i) {
            if (arr[i] == data) {
                ++count;
            } else {
                break;
            }
        }
    }
    return count;
}
//插入排序
function insertionsort(arr) {
    var temp, inner;
    for (var outer = 1; outer <= arr.length-1; ++outer) {
        temp = arr[outer];
        inner = outer;
        while (inner > 0 && (arr[inner-1] >= temp)) {
            arr[inner] = arr[inner-1];
            --inner;
        }
        arr[inner] = temp;
    }
}

