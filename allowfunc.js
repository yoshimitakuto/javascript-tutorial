function nameFunc(message) {
    console.log(message);
};

const arrowFunc = (message) => {
    console.log(message);
};

const onelineFunc = (message) => console.log(message);


// オブジェクト生成
const users = {
    hoge: 'takuto'
};
// 定数定義（usersオブジェクトの今回であれば「hoge」というkeyの値を返すという処理）
const getUserName = (nameID) => users[nameID];
// 上記宣言を通常で書くと「return」を使用することになるが1行だとreturn入らなくなる
// const getUserName = (userID) => {
//     return users[nameID]
// };


nameFunc("これは名前付き関数です");
arrowFunc("これはアロー関数です");
onelineFunc("これは1行で書いたアロー関数です");

const username = getUserName("hoge");
console.log(username);
