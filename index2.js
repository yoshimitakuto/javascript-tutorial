// console.log("hello")

// DOM要素取得
const button = document.getElementById("addBtn");
const lists = document.getElementById("lists");

// ボタンを押下した時の処理
button.addEventListener("click", async function() {
    // console.log("OK");

    // データのやり取り
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await res.json();
    // console.log(users);

    // DOM操作
    users.forEach((user) => {
        if (user.id <= 5) {
            const list = document.createElement("li");
            list.innerText = user.name;
            lists.appendChild(list);
        }
    });

    // const list = document.createElement("li");
    // list.innerText = "foo";
    // lists.appendChild(list);
});


// ページが読み込まれた時点でユーザーを表示するには「load」を使用する。
window.addEventListener("load", async function() {
    // データ読み込み
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await res.json();

    // DOM操作
    users.forEach((user) => {
        const list = document.createElement("li");
        list.innerText = user.name;
        lists.appendChild(list);
    });
});