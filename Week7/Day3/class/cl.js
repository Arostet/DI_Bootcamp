// Promise.all(arr_of_promises)
//Promise.allSettled(arr)
//Promise.race(arr)

const promiseOne = new Promise((res, rej) =>{
    setTimeout(() => {
        res("Resolve Promise 1:")
    }, 2* 1000);
});

const promiseTwo = new Promise((res, rej) =>{
    // setTimeout(() => {
        res("Resolve Promise 2:")
    // }, 2* 1000);
});

const promiseThree = new Promise((res, rej) =>{
    // setTimeout(() => {
        res("Resolve Promise 3:")
    // }, 2* 1000);
});

Promise.all([promiseOne, promiseTwo, promiseThree])
    .then(result) => {
        console.log(result);
    }