// ユーチューバーオブジェクト・プロパティ・メソッド定義

const youtuber = {
    list: {
        bussiness: {
            youtuber: [
                {name: "あっちゃん", age: 30, teachHistory() {}},
                {name: "しまぶー", age: 30, teachPrograming() {}}           
            ],
            teach() {},
        },
        entertainment: {
            youtuber: [{name: "ヒカキン"},{name: "はじめ"}],
            makesmail() {},
        },
    },
    plan() {},
    uploadmovie() {},
};

// アクセス
let oriraji = youtuber.list.bussiness.youtuber[0].name
console.log(oriraji); //あっちゃん

youtuber.plan(); //メソッド呼び出し
