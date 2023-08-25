const setscope = (scope) => {
    if (scope === "function") {
        var functionScope = "関数スコープないならどこでも参照可能（ver）";
    } else if (scope === "block") {
        let blockScope = "ブロックスコープ内でしか参照できません";
    }
    console.log(functionScope);
};

setscope("function");
