// 『mapメソッド（配列の要素を繰り返す）』mapは配列を返す
const array = [1, 2, 3, 4];
const resultArray = array.map(x => x * 2);
console.log(resultArray);

// 連想配列のオブジェクト作成
const object = {
    // key: {value}
    "hoge": {text: "fuga"},
    "foo" : {text: "bar"},
    "fiz" : {text: "buzz"}
};
// 連想配列のkeyだけを作ってmapで繰り返す
const objectToArray = Object.keys(object).map(key => {
    console.log(key)
    // オブジェクトのkeyに対する値を取得
    const value = object[key]
    console.log(value)
    // 配列の値にidを追加し、取得しているkeyを入れている
    value['id'] = key
    console.log(value)
    return value
});
console.log(objectToArray);



// 『filterメソッド（条件にあった配列の値を抽出する）』filterは配列を返す
const object2 = [
    {id: "hoge", text: "fuga"},
    {id: "hoge", text: "fuga2"},
    {id: "foo", text: "fuga"},
    {id: "fiz", text: "buzz"}
]
const objectToFilter = object2.filter(obj => {
    return obj.id === "hoge"
});
console.log(objectToFilter);
console.log(objectToFilter[0]); //条件に合う配列の要素番号が最初の値を取得
console.log(objectToFilter[0].text); //上記取得した条件に合う配列の指定したkeyの値を取得



// 『findIndexメソッド（条件にあった配列の値の要素番号を抽出する）』findIndexは配列の要素番号を返す
const object3 = [
    {id: "hoge", text: "fuga"},
    {id: "foo", text: "bar"},
    {id: "fiz", text: "buzz"}
];
const objectTofindIndex = object3.findIndex(obj => {
    return obj.id === "hoge"
});
console.log(objectTofindIndex);
console.log(objectTofindIndex, object3[objectTofindIndex].text);



// 『testメソッド（条件にあった文字列かどうかを判定する）』マッチする（true）マッチしない（false）を返す
const takuto = "takuto";
const nanana = "nanana";
// takuさえ合っていればそのあとの文字列はなんでも良いという意味（*）以下はtest()を使う時の構文
const regex = RegExp("taku*");

console.log("Is taku ?", regex.test(takuto));
console.log("Is taku ?", regex.test(nanana));
console.log("Is taku ?", /nana*/.test(nanana)); //直接判定文字列を入力することも可能

const isTaku = regex.test(takuto);

if (isTaku) {
    console.log("私はtakutoです")
} else {
    console.log("私はtakutoではありません")
}