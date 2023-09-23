//「基礎知識」
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
const pattern11 = new RegExp('(13|45)'); //指定した文字列のどちらかを抽出する（マッチする方を優先的に出力するため13ではなく45が出力される）
const pattern12 = new RegExp('[0-9]{5}'); //直前の{n}回の繰り返しを検証し出力する
const pattern13 = new RegExp('[0-9]{5,}'); //直前の少なくとも{n}回の繰り返しを検証し出力する(01234の5回目までは少なくともマッチングを検証し、その後の文字列もすべて検証する) ※今回は文字列が10のため10まではn回の繰り返しとして検証できるが、11以上となると少なくとも繰り返せる数ではなくなるためerrorが出される

const str = "0123456789";
const str2 = "f";

const result = str.match(pattern13); //返り値は配列
const result2 = str2.match(pattern5);

console.log(result[0]); //要素数がひとつとしての配列が返ってくるため[0]を用いて表示する
console.log(result2[0]);


// 「特殊文字のエスケープ」
const pat = /\/post\/*/; // /post/というURLに対して正規表現を適用したい場合、「/」が区切りとしてJSに捉えられてしまうため「\」をて用いてJSに教えてあげる
const pat2 = /^[a-zA-Z0-9]*@gmail.com\.com/; //「.」が特殊文字のピリオドとしてJSに捉えられてしまわないようにするために直前にバックスラッシュを用いる


//正規表現でよく使われる「メソッド」
// ①replaceメソッド（パターン・オプション内容に基づき、第二引数に指定した文字列または空に変換する）
const telephonNumber = "080-1234-5678";
const tel = telephonNumber.replace(/[^0-9]/g, ''); //0-9以外の文字列をすべて「空」に置き換える
console.log(tel); //08012345678が出力される

// ②matchメソッド（正規表現でマッチする文字列を抽出する）※基礎でやっている内容

// ③ testメソッド（正規表現に対してマッチする文字列かどうかを判定する）※返り値は「true/false」となる
const takuto = "takuto";
const charato = "charato";
const regex = RegExp('taku*');
console.log(regex.test(takuto)); //true
console.log(regex.test(charato)); //false
console.log(/taku*/.test(charato)); //正規表現を直接記述する方法もある