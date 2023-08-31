const children = []; // 子供の情報を格納する配列を定義

const child = {
    name: "たくみ",
    id: children.length, // 子供の ID を配列の長さから取得
    explanation: "3〜10歳の子供です",
    wash: true
};

children.push(child); // 子供の情報を配列に追加

const washed = (fn, food, child) => { // child を引数として追加
    if (child.wash == true) {
        let action = fn(food);
        console.log(action);
    }
};

cut = (food) => {
    return food.substring(0, 2); // subString -> substring
};
peer = (food) => {
    return food.substring(0, 3); // subString -> substring
};
bring = (food) => {
    return food.substring(0, 4); // subString -> substring
};

washed(cut, "グレープフルーツ", child); // child を引数として追加

console.log(children[0]); //確認