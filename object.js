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


// 少し実践的な使い方をしてみる
const downtown = {
    name: "ダウンタウン",
    boke: "松本人志",
    tsukkomi: "浜田雅功"
};
const chidori = {
    name: "千鳥",
    boke: "大悟",
    tsukkomi: "ノブ"
};

const introduce = (combi) => {
    console.log(`コンビ名は${combi.name}です。ボケ担当は${combi.boke}、ツッコミ担当は${combi.tsukkomi}です。よろしくお願いいたします！`);
};

introduce(chidori);
introduce(downtown);


// オブジェクトのメソッド（プロパティに関数を定義すること）
const milkboy = {
    name: "ミルクボーイ",
    boke: "駒場孝",
    tsukkomi: "内海崇",
    // 以下オブジェクトのメソッドの省略の書き方（本来は manzai: function() {} ※ アロー関数は意図しない挙動を発生させる原因となる可能性があるため使用しない！）
    manzai () {
        return "爆笑";
    }
};
console.log(milkboy.manzai);
console.log(milkboy);