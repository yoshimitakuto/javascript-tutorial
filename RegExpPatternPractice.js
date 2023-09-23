const pattern = new RegExp('^[0-9]'); //0〜9にマッチする先頭の文字列を抽出する
const pattern2 = new RegExp('[0-9]$'); //0〜9にマッチする文末の文字列を抽出する
const pattern3 = new RegExp('[0-4]*'); //0~4のにマッチする文字列をすべて繰り返してマッチする文字列を表示する
const pattern4 = new RegExp('[0-9]*5'); //0~9にマッチする文字列を5回繰り返してマッチする文字列を表示する
const pattern5 = new RegExp('fo*'); //f・oとマッチする文字列をすべて繰り返し検証し表示するため[f]が表示される
const pattern6 = new RegExp('fo+'); //直前の文字列[o]も見ているためこの場合はエラーが吐かれる
const pattern7 = new RegExp('012[0-9]?'); //012に続く0〜9のいづれかにマッチする文字列を0個か1個抽出する
const pattern8 = new RegExp('[0-9].'); //最初の文字列が0~9の値のいづれかにマッチしているかを検証し、ピリオドは２つ目の文字列の値がなんでも良いのでとりあえず抽出する時に使う
const pattern9 = new RegExp('012[0-9].'); //このようにすると012が出力され、その後の3が最初の文字列としてパターンの範囲内で検証され、3の次の文字列がとりあえず出力される
const pattern10 = new RegExp('(012)'); //（）内に指定した文字列を抽出

const str = "0123456789";
const str2 = "f";

const result = str.match(pattern10); //返り値は配列
const result2 = str2.match(pattern5);

console.log(result[0]); //要素数がひとつとしての配列が返ってくるため[0]を用いて表示する
console.log(result2[0]);
