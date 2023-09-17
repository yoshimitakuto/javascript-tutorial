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


// 練習問題
const downtown2 = {
    name: "ダウンタウン",
    boke: "松本人志",
    tsukkomi: "浜田雅功",
    introduce () {
        console.log(`コンビ名は${this.name}です。ボケ担当は${this.boke}、ツッコミ担当は${this.tsukkomi}です。よろしくお願いいたします！`);    
    }
};

downtown2.introduce();


// 入れ子になったオブジェクト
const yoshimoto = {
    downtown: {
        name: "ダウンタウン",
        boke: "松本人志",
        tsukkomi: "浜田雅功",
        manzaitype () {
            return "結果発表";
        }
    },
    chidori:  {
        name: "千鳥",
        boke: "大悟",
        tsukkomi: "ノブ",
        manzaitype () {
            return "いかにかん";
        }
    },
    ninetynine: {
        name: "ナインティナイン",
        boke: "岡村隆史",
        tsukkomi: "矢部浩之",
        manzaitype () {
            return "~~";
        }
    }
};
console.log(yoshimoto);
console.log(yoshimoto.ninetynine.boke);
const value = yoshimoto.chidori.manzaitype("ちどり");
console.log(value);


// 配列
const arr = ['富士', '鷹', '茄子'];
arr[2] = "ズッキーニ";
console.log(`初夢は${arr[0]}でした`);
console.log(`インデックス番号2は${arr[2]}に変更しました`);
console.log(arr.length);

const tokugawake = [
    "徳川家康",
    "徳川秀忠",
    "徳川家光",
    "徳川家綱",
    "徳川綱吉"
];
console.log(tokugawake.length);
for (let i = 0; i < tokugawake.length; i++) {
    const shogun = tokugawake[i];
    console.log(`江戸幕府${i+1}代将軍「${shogun}公」`);
};
// 「for of」の構文(上記のfor文と全く同じもの) index番号を使用しない時に使用する
for (const shogun of tokugawake) {
    if (shogun === "徳川秀忠") {
        continue; //徳川秀忠を飛ばして次のループに移る
    } else if (shogun === "徳川家綱") {
        break; //上記の条件がtrueだったらループ処理を中断する
    }
    console.log(`江戸幕府将軍「${shogun}公」`);
};

const items = [
    'ひのきのぼう',
    'ソード',
    '魔法の杖',
    '回復薬',
    '強化薬'
];
items.push("千里眼"); //配列に新たなオブジェクトを追加
console.log(items);
const newitems = items.slice(1, 4); //index[4]は含まれない
console.log(newitems);