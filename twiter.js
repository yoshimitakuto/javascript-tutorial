// 関数定義（真偽）
const isTweetable = (text) => {
    return text.length <= 140;
};
const isunTweetable = (text) => {
    return text.length > 140;
}

// 関数を関数内で使い回すことも可能
const conTweetable = (text) => {
    if (isTweetable(text)) {
        console.log("投稿完了")
    } else if (isunTweetable(text)) {
        console.log("文字数オーバーのため投稿できません");
    }
};

conTweetable("foo");


// より良いコード
const tweetable = (text) => {
    let len = text.length;

    if (len <= 140) {
        console.log("OK");
    } else {
        console.log("NO");
    }
};

tweetable("dkdkdkdkd");