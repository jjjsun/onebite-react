// async
// 어떤 함수를 비동기 함수로 만들어주는 키워드
// 함수가 프로미스를 반환하도록 변환해주는 그런 키워드
// async function getData(){
//     return {
//         name: "박재선",
//         id: "ddorri",
//     };
//     //async를 씀으로써, 이 객체를 그대로 반환하는것이 아닌,
//     //이 객체를 결과값으로 갖는 새로운 promise를 반환하는 함수로 변환되는것

// }
// console.log(getData());


//애초에 promise를 반환하는 함수였다면?
async function getData(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve({
                name: "박재선",
                id:"ddorri",
            })
        }, 1500);
    })
}
console.log(getData());


//await
//async 함수 내부에서만 사용이 가능한 키워드
//비동기 함수가 다 처리되기를 기다리는 역할

async function printData(){
    const data = await getData();
    console.log(data);
}

printData();