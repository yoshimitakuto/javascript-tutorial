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
