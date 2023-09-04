// async awaitを使用してWebApiを叩く

async function callApi() {
    // 実際にAPIを叩く処理
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    // JSONメソッドでデータを取得する
    const users = await res.json();
    console.log(users);
};

callApi();


// thenを用いた書き方
const callApi2 = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        return res.json();
      })
      .then((users) => {
        console.log(users);
      });
};

callApi2();