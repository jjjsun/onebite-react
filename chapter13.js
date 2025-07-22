//Promise란? 
//비동기 작업을 효율적으로 처리할 수 있도록 도와주는 자바스크립트의 내장 객체
//setTimeout같은 비동기작업을 감싸주는 객체

//Promise의 효능
//비동기 작업 실행
//비동기 작업 상태 관리
//비동기 작업 결과 저장
//비동기 작업 병렬 실행
//비동기 작업 다시 실행
//기타 등등

//Promise의 3가지 상태
//1. 대기(Pending)
//아직 작업이 완료되지 않은 상태
//ex. 유튜브 영상 대기중

//2. 성공(Fulfilled)
//비동기 작업이 성공적으로 마무리 된 상태
//ex. 영상 로딩 완료

//3. 실패(Rejected)
//비동기 작업이 실패한 상태
//ex. 시청 불가능 한 상태

//1->2 : 해결(resolve)
//1->3 : 거부(reject) ex. 영상 로딩 실패

// const promise = new Promise((resolve, reject)=>{
//     //비동기 작업 실행하는 함수
//     //executor

//     setTimeout(()=>{
//         const num = 10;
//         if(typeof num === 'number'){
//             resolve(num + 10);
//         }else{
//             reject("num이 숫자가 아닙니다.");
//         }
//         // console.log("안녕");
//         // // resolve("안녕"); //->promise 비동기 작업 성공
//         // reject("왜 실패했는지 이유..."); //->promise 비동기 작업 실패
//     }, 2000);
// });

// setTimeout(()=>{
//     console.log(promise);
// }, 3000);

// then 메서드
//-> 그 후에
//promise가 성공하게되면, 즉, resolve를 호출하게 되면
//그 후에 then메서드에 전달한 콜백함수를 실행시켜줌.
//그러면서 동시에 resolve에 전달한 결과값(num +10)을 매개변수로 까지 제공해줌
//value로 매개변수받음


//만약, reject되면 then메서드는 호출되지 않음
//then메서드는 resolve될때만 호출되기 때문
//그래서 reject일때는 then이 아닌, promise의 catch를 사용하면됨

function add10(num){
    const promise = new Promise((resolve, reject)=>{
    //비동기 작업 실행하는 함수
    //executor

    setTimeout(()=>{
        if(typeof num === 'number'){
            resolve(num + 10);
        }else{
            reject("num이 숫자가 아닙니다.");
        }
    }, 2000);
    });
    return promise;
}

const p = add10(0);
p.then((result)=>{
    console.log(result);
    const newP = add10(result);

    return newP;
}).then((result)=>{
    console.log(result);
    return add10(result)
}).then((result)=>{
    console.log(result);
}).catch((error)=>{
    console.log(error);
});

// promise.then((value)=>{
//     console.log(value);
// }).catch((error)=>{
//     console.log(error);
// })


