// mutable(ミュータブル)宣言後に変更可能
// immutable(イミュータブル)宣言後に変更不可能

let mutableText = "let変更前";
mutableText = "let変更後";
console.log(mutableText);

const immutableText = "const変更前";
// immutableText = "const変更後"; //constは再代入・再定義できない
console.log(immutableText);

const mutableArray = [1, 2, 3];
mutableArray.push(4); //配列やオブジェクトは定数宣言してもmutableになる。
console.log(mutableArray);
