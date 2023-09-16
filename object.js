// オブジェクト生成
const human = {
    name: "拓人",
    email: "example.com",
    height: "169cm",
};
console.log(human);
console.log(human.email);


// 空のオブジェクト（プロパティを持たないオブジェクト）
const human2 = {};
console.log(human2);


// オブジェクトのプロパティ（値）を再代入と追加
const human3 = {
    name: "拓人",
    email: "example.com",
    height: "169cm",
};
human3.name = "takuto"; //再代入
human3.weight = 60; //追加
console.log(human3);