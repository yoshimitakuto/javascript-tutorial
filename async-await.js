// async awaitを使用してWebApiを叩く（こっちの方が直感的なため現場ではよく採用されている）
async function callApi() {
    // 実際にAPIを叩く処理
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    // JSONメソッドでデータを取得する
    const users = await res.json();
    console.log(users);
};

callApi();


// Async/Awaitのエラーハンドリングの場合 (try...catch文を使用する)
async function callApi1() {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await res.json();
    console.log(users);
  } catch (error) { //なんらかのエラーが発生したらcatchが呼ばれる
    console.log(error);
  }
};

callApi1();


// Promisを使用したthenを用いる書き方 (非同期処理らしい書き方)
const callApi2 = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((json) => console.log(json))
      .catch((error) => {
        console.log(error);
      });
};

callApi2();


// XMLを用いた書き方 (現場ではほとんど採用されていない)
// const callApi3 = () => {
//     const xhr = new XMLHttpRequest();
//     xhr.open("GET", "https://jsonplaceholder.typicode.com/users");
//     xhr.responseType = "json";
//     xhr.send();
//     xhr.onload = () => {
//         console.log(xhr.response);
//     };
// };

// callApi3();