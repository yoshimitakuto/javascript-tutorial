const setscope = (scope) => {
    if (scope === "function") {
        var functionScope = "関数スコープ内ならどこでも参照可能（ver）";
    } else if (scope === "block") {
        let blockScope = "ブロックスコープ内でしか参照できません";
        console.log(blockScope);
    };
    console.log(functionScope);
};

setscope("function");
setscope("block");


// 無名関数
const greeting = "こんにちわ";
const greeting2 = "おはよう"
const conFunc = function (username) {
    console.log(greeting + `${username}さん`)
}
conFunc("菅原")

// ダブルアロー演算子
const conFunc2 = (username) => {
    const func2greet = greeting2;
    console.log(func2greet + `${username}さん`);
};
conFunc2("田中");
