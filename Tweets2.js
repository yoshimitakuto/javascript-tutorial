const deleteTweet = () => {
    console.log("ツイートを削除しました");
};

const updateTweet = () => {
    console.log("ツイートを更新しました");
};

const confirmed = (dele, upda) => {
    const input = window.prompt("ツイートを削除しますか？");
    if (input === "削除") {
        dele();
    } else if (input === "更新") {
        upda();
    } else {
        console.log("処理をキャンセルしました");
    }
};


// 実行
confirmed(deleteTweet, updateTweet);

// コールバック関数に匿名関数を使用して実行(カッコ内に新たに匿名関数を定義する)　※ 現在引数が２つ指定されているため匿名関数も同様に２つ指定する必要がある
confirmed(() => {
    console.log("更新しました");
});


// 以下のような記述もできる（メソッドで条件分岐)
const exampleTweet = (fn) => {
    const input = window.prompt("実行しますか？");
    fn(input); //inputを関数の引数に渡してあげる　①
};

//匿名関数の引数に上記のinputを渡してあげる
exampleTweet((input) => {
    if (input === "例文") {
        console.log("成功です！");
    } else {
        console.log("失敗です。。。");
    }
});