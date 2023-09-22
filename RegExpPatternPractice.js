const pattern = new RegExp('^[0-9]'); //先頭の文字を抽出
const pattern2 = new RegExp('[0-9]$'); //末尾の文字列を抽出
const pattern3 = new RegExp('[0-9]*'); //
const pattern4 = new RegExp('[0-9]*5'); //
const str = "0123456789";

const result = str.match(pattern4);

console.log(result[0]);

