/**
 * Created by zhouli on 2019/6/9
 */
function timeout(ms) {
    return new Promise((resolve) => {
        console.log(3);
        setTimeout(resolve, ms);
    });
}
async function asyncPrint() {
    await timeout(3000);
    await setTimeout(function () {
        console.log(2);
    },2220);
    console.log(1);
}

asyncPrint();


// await 对 promise 生效，对 setTimeout 这种类型的微任务，不会等待