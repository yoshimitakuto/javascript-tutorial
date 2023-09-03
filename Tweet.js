const unfollow = () => {
    console.log("フォローを外しました");
};

const cancelTweet = () => {
    console.log("ツイートをキャンセルしました");
};

const confirmed = (fn) => { //コールバック関数使用
    if (window.confirm("実行しますか？")) {
        fn();
    }
};


// 実行
confirmed(unfollow);


// コールバック関数に匿名関数を指定して実行する
confirmed(() => {
    console.log("ツイートをキャンセルせず、投稿に成功しました");
});

