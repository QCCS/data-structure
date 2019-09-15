/**
 * Created by zhouli on 2019/5/14
 */
const arr = [1, 20, 10, 30, 22, 11, 55, 24, 31, 88, 12, 100, 50];

function swap(arr, i, j){
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function bubbleSort(arr) {
    for(var i = 0; i < arr.length - 1; i++){
        var flag = false;
        for(var j = 0; j < arr.length - 1 - i; j++){
            if(arr[j] > arr[j+1]){
                swap(arr, j, j+1);
                flag = true;
            }
        }
        if(!flag){
            break;
        }
    }
    return arr;
}

console.log(bubbleSort(arr));  //[ 1, 10, 11, 12, 20, 22, 24, 30, 31, 50, 55, 88, 100 ]