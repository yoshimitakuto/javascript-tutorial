// イミュータブル・ミュータブルについて
const imutable = "値が変化しない性質のもの";
const mutable = "値が変化する性質のもの";
console.log(`イミュータブルは${imutable}、ミュータブルは${mutable}`);

// =============================
console.log(`オブジェクトや配列はミュータブルのため、constを用いても値の変更は可能となる。`);
// 例
const meijin = {
    name: '羽生結弦',
    age: '25'
};
console.log(meijin);
meijin.name = "藤井聡太";
meijin.age = 18;
console.log(meijin);
// ============================
console.log(`letを用いると以下のように再代入できる。`);
let meijin2 = {
    name: '中村俊輔',
    age: '35'
};
meijin2 = {
    name: '中田英寿',
    age: '46'
};
console.log(meijin2);


// 破壊的メソッド・非破壊的メソッド
const I = "破壊的メソッド";
const M = "非破壊的メソッド";
console.log(`オブジェクトの状態を変化させるメソッドを「${I}」と呼ぶ`);
// 例
const arr = [1, 2, 3];
console.log(arr);
// const reversed = arr.reverse(); //この状態だと[arr配列]自体を変化させてしまっているため、arrを呼び出しても変更されてしまっている。
const reversed = arr.slice().reverse(); //sliceメソッドを引数空の状態で使用することでarr配列の【コピー】が作られるためarr配列自体の変化を防ぐことができる！
console.log(reversed);
console.log(arr);
console.log(`オブジェクトの状態を変化させないメソッドを「${M}」と呼ぶ`);


// 配列全体に対しなにかしら変換処理をかけ対時に使用する関数（map）
const ma = "map関数は高階関数";
const fn = "fはコールバック関数";
const arr2 = [1, 2, 3, 4, 5];
// const f = (x) => { //ここの関数でmapのコールバック関数として処理をかけてもらう関数を定義
//     return 100 * x;
// };
// const mapped = arr2.map(f);
// 本来は以下のように省略形で書く(引数・返り値が1つしかない場合のみ可能)
const mapped = arr2.map(x => x * 100);
console.log(mapped);


// 配列全体に対して真偽をかけ、真となるすべての配列要素からなる新しい配列を作りたい時に使用(filter)
const arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const filtered = arr3.filter(x => x % 2 === 0); //返り値は「boolean」となるように設定する
console.log(filtered);


// 与えられた関数を（左から右）各配列要素に対して実行し、単一の値にして返す(reduce)
const arr4 = [1, 2, 3, 4, 5, 6];
const f = (x, y) => {
    return x * y;
};
const reduced = arr4.reduce(f); //左から順に各配列要素に対して処理を行う！
// f(f(f(f(f(arr4[0], arr4[1]),arr4[2]), arr4[3]), arr4[4]), arr4[5]) このような処理構造となっている
console.log(reduced);


// 練習問題（1000以下の素数をコンソールに小さい順に出力する）
const arr5 = [];
const num = 1000;
for (let i = 2; i <= num; i++) {
    for (let j = 2; j <= i; j++) {
        if (j === i) {
            console.log(i);
            arr5.push(i);
        }
        if (i % j === 0) {
            break;
        }
    }
}
console.log(arr5.length);
// ============================
console.log("エラトステネスの篩を用いた記述");
const primes = new Array(num);
primes.fill(true); //要素がすべてtrueの配列を作る
primes[0] = false;
primes[1] = false;
// console.log(primes);
for (let i = 0; i <= num ** 0.5; i++) { //numの平方根まで出してあげる(3~31まで)
    // console.log(i);
    if (primes[i]) {
        for (let j = 2 * i; j <= num; j = j + i) {
            primes[j] = false;
        }
    }
}
console.log(primes);
for (let i = 0; i <= num; i++) {
    if (primes[i]) {
        console.log(i);
    }
}
console.log(1000 ** 0.5); //平方根の値（31の2乗となる)


// 練習問題（ごちゃまぜの整数を小さい順にソートする関数を作ってください）※ 選択ソートプログラム
const selectionSort = (_A) => { //破壊的メソッドになっているためsliceでコピーを作っておく！
    const A = _A.slice(); //コピー作成
    const L = A.length;
    for (let i = 0; i < L; i++) {
        let min = i;
        for (let j = i + 1; j < L; j++) {
            if (A[min] > A[j]) {
                min = j;
            }
        }
        // const tmp = A[i];
        // A[i] = A[min];
        // A[min] = tmp;
        [A[i], A[min]] = [A[min], A[i]]; //分割代入を用いた書き方
    }
    return A;
};
const arr6 = [1, 5, 7, 2, 1, 3, 4, 5, 7, 8, 1, 3, 5, 2];
const sorted = selectionSort(arr6);
console.log(sorted);
console.log(arr6);