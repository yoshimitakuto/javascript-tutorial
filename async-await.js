// async awaitを使用してWebApiを叩く

async function callApi() {
    // 実際にAPIを叩く処理
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    // JSONメソッドでデータを取得する
    const users = await res.json();
    console.log(users);
};

callApi();