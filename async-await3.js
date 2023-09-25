const ids = [1, 2, 3, 4, 5];

// 直列で非同期処理（順番にAPIリクエストを行う処理のこと）順々にデータが来る
const main = async () => {
    for (let id of ids) {
        const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
        const user = await res.json();
        console.log(user); 
    }
};
// main();

// 並列で非同期処理（同時にAPIリクエストを行う処理のこと）一気にデータが来る（同時処理のため）
const main1 = async () => {
    const fetches = ids.map((id) => 
        fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
            .then((res) => res.json())
    );
    const user = await Promise.all(fetches);
    console.log(user);
};
main1();