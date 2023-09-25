// タイマー処理 (1秒後) ※問題ありのコード
setTimeout(() => {
    console.log("Hello!");
}, 1000);

// コールバック地獄 (Promisを使用しないとこうなる。。。) ※問題ありのコード
setTimeout(() => {
    console.log("Hello!");
    setTimeout(() => {
        console.log("Hello!");
        setTimeout(() => {
            console.log("Hello!");
            setTimeout(() => {
                console.log("Hello!");
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000);


// Promisを用いて対応するコード
// Promisで返す非同期処理を自分で作る（ラップしてあげる）
const aysncHello = () => 
    new Promise((resolve, reject) => { //Promiseを自分で作る (成功したらresolve、失敗したらrejectを呼ぶ)
        setTimeout(() => {
            console.log("Hello!");
            // resolve();
            resolve("hello"); //引数を渡すこともできる。
            // reject(); // ifやtry..catchで条件分岐を行うと良い！
        }, 1000);
    });

// 上記のPromiseを使用するコードが以下（Promiseのためthenが使える）
aysncHello()
    .then(() => aysncHello())
    .then(() => aysncHello())
    .then(() => aysncHello())
    .catch((error) => {
        console.log(error);
    });

// aysnc/awaitの書き方
const main = async () => {
    try {
        const hello = await aysncHello();
        // await aysncHello();
        // await aysncHello();
        // await aysncHello();
        console.log(hello);
    } catch (error) {
        console.log("error");
    }
};
main();