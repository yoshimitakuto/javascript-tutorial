// for
const num = 10;
for(i = 1; i <= num; i++) {
    console.log(i);
};


// while
let j = 0;
while(j < num + 10) {
    j++;
};
console.log(j);


// forEach
const members = ["斎藤", "近藤", "田中"];
members.forEach((element) => {
    console.log(`こんにちわ${element}さん`);
});