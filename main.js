/*----------------------------
メソッド・イベント
------------------------------*/

const message = "hello"
// alert(message);
// let yourname = prompt("あなたの名前を教えてください");
// console.log(yourname);

// text取得
console.log(document.querySelector(".p1").textContent);
// 全てのh1タグを取得し、textを反復処理で表示させる
let j = 1;
const text = document.querySelectorAll("h1");
text.forEach((element) => {
    const greetType = element.textContent;
    console.log(`挨拶No${j}：${greetType}`);
    j++;
});

// h2タグのテキスト内容を以下で変更する子も可能
document.querySelector("h2").textContent = "メッセージが届いています。";

// イベント
document.querySelector("button").addEventListener('click', () => {
    // console.log("クリックされました")
    const h1 = document.querySelectorAll("h1");
    h1.forEach((element) => {
        console.log(element.textContent);
        // toggleメソッドでつけたり外したりできる
        element.classList.toggle("visible");
    });
})