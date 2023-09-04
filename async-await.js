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


// XMLを用いた書き方
const callApi3 = () => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://jsonplaceholder.typicode.com/users");
    xhr.responseType = "json";
    xhr.send();
    xhr.onload = () => {
        console.log(xhr.response);
    };
};

callApi3();