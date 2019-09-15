
async function timeout(ms) {
    return new Promise((resolve) => {
        console.log(3);
        setTimeout(resolve, ms);
    });
}
async function asyncPrint() {
    await timeout(3000);
    await setTimeout(function () {
        console.log(2);
    },2000);
    console.log(1);
}

asyncPrint();