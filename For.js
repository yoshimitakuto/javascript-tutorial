const arr = new Array(10000000).fill(0).map((v, i) => i);
const sum = 0;
const len = arr.length | 0;

function addSum(v) {
    sum += v;
}

// 型指定（|0）
for(let j = 0; j < 5; j++) {
    sum = 0;
    console.time("Start Typed for");
    for(let i = 0; i < len; i=(i+1)|0) {
        sum += arr[i];
    }
    console.timeEnd("End Typed for")
    console.log(sum);
}