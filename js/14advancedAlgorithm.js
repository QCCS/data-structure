/**
 * Created by zhouli on 18/6/10
 * Email li.zhou@huilianyi.com
 */
//计算斐波那契数列
function recurFib(n) {
    if (n < 2) {
        return n;
    } else {
        return recurFib(n - 1) + recurFib(n - 2);
    }
}

//计算斐波那契数列:动态规划
function dynFib(n) {
    var val = [];
    for (var i = 0; i <= n; ++i) {
        val[i] = 0;
    }
    if (n == 1 || n == 2) {
        return 1;
    } else {
        val[1] = 1;
        val[2] = 2;
        for (var i = 3; i <= n; ++i) {
            val[i] = val[i - 1] + val[i - 2];
        }
        return val[n - 1];
    }
}


//寻找最长公共子串
function lcs(word1, word2) {
    var max = 0;
    var index = 0;
    var lcsarr = new Array(word1.length + 1);
    for (var i = 0; i <= word1.length + 1; ++i) {
        lcsarr[i] = new Array(word2.length + 1);
        for (var j = 0; j <= word2.length + 1; ++j) {
            lcsarr[i][j] = 0;
        }
    }
    for (var i = 0; i <= word1.length; ++i) {
        for (var j = 0; j <= word2.length; ++j) {
            if (i == 0 || j == 0) {
                lcsarr[i][j] = 0;
            } else {
                if (word1[i - 1] == word2[j - 1]) {
                    lcsarr[i][j] = lcsarr[i - 1][j - 1] + 1;
                } else {
                    lcsarr[i][j] = 0;
                }
            }
            if (max < lcsarr[i][j]) {
                max = lcsarr[i][j];
                index = i;
            }
        }
    }
    var str = "";
    if (max == 0) {
        return "";
    }
    else {
        for (var i = index - max; i <= max; ++i) {
            str += word2[i];
        }
        return str;
    }
}


function max(a, b) {
    return (a > b) ? a : b;
}

// 背包问题:递归解决方案
// 背包问题是算法研究中的一个经典问题。试想你是一个保险箱大盗,打开了一个装满奇珍 异宝的保险箱,
// 但是你必须将这些宝贝放入你的一个小背包中。保险箱中的物品规格和价 值不同。你希望自己的背包装进的宝贝总价值最大。
function knapsack(capacity, size, value, n) {
    if (n == 0 || capacity == 0) {
        return 0;
    }
    if (size[n - 1] > capacity) {
        return knapsack(capacity, size, value, n - 1);
    } else {
        return max(value[n - 1] +
            knapsack(capacity - size[n - 1], size, value, n - 1),
            knapsack(capacity, size, value, n - 1));
    }
}


// 背包问题:动态规划解决方案
function dKnapsack(capacity, size, value, n) {
    var K = [];
    for (var i = 0; i <= capacity + 1; i++) {
        K[i] = [];
    }
    for (var i = 0; i <= n; i++) {
        for (var w = 0; w <= capacity; w++) {
            if (i == 0 || w == 0) {
                K[i][w] = 0;
            }
            else if (size[i - 1] <= w) {
                K[i][w] = max(value[i - 1] + K[i - 1][w - size[i - 1]],
                    K[i - 1][w]);
            } else {
                K[i][w] = K[i - 1][w];
            }
            console.log(K[i][w] + " ");
        }
        console.log();
    }
    return K[n][capacity];
}


// 第一个贪心算法案例:找零问题
// 贪心算法的一个经典案例是找零问题。你从商店购买了一些商品,找零 63 美分,店员要
// 怎样给你这些零钱呢?如果店员根据贪心算法来找零的话,他会给你两个 25 美分、一个 10
// 美分和三个 1 美分。在没有使用 50 美分的情况下这是最少的硬币数量。
function makeChange(origAmt, coins) {
    var remainAmt = 0;
    if (origAmt % .25 < origAmt) {
        coins[3] = parseInt(origAmt / .25);
        remainAmt = origAmt % .25;
        origAmt = remainAmt;
    }
    if (origAmt % .1 < origAmt) {
        coins[2] = parseInt(origAmt / .1);
        remainAmt = origAmt % .1;
        origAmt = remainAmt;
    }
    if (origAmt % .05 < origAmt) {
        coins[1] = parseInt(origAmt / .05);
        remainAmt = origAmt % .05;
        origAmt = remainAmt;
    }
    coins[0] = parseInt(origAmt / .01);
}

function showChange(coins) {
    if (coins[3] > 0) {
        console.log("Number of quarters - " + coins[3] + " - " + coins[3] * .25);
    }
    if (coins[2] > 0) {
        console.log("Number of dimes - " + coins[2] + " - " + coins[2] * .10);
    }
    if (coins[1] > 0) {
        console.log("Number of nickels - " + coins[1] + " - " + coins[1] * .05);
    }
    if (coins[0] > 0) {
        console.log("Number of pennies - " + coins[0] + " - " + coins[0] * .01);
    }
}

