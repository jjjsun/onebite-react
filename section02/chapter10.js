// 1. Date 객체를 생성하는 방법
let date1 = new Date(); // new라는 키워드와 함께 새로운 객체를 생성하는 Date() 같은 내장함수들을 생성자 라고 부름


// let date2 = new Date("2002-08-03/10:10:10");
let date2 = new Date("2002, 8, 3, 20:30:06");


//2. 타임 스탬프
// 특정 시간이 "1970.01.01 00시 00분 00초"로 부터 몇 ms가 지났는지를 의미하는 숫자값
let ts1 = date1.getTime();

let date4 = new Date(ts1);
//console.log(date1, date4);

// 3.시간 요소들을 추출하는 방법
let year = date1.getFullYear();
let month = date1.getMonth() + 1;
let date = date1.getDate();

let hour = date1.getHours();
let minute = date1.getMinutes();
let seconds = date1.getSeconds();
// console.log(
//     year,
//     month, //자바스크립의 월은 0부터시작, 1월은 -> 0 , 5월은 -> 4
//     date,
//     hour,
//     minute,
//     seconds
// )

// 4. 시간 수정하기
date1.setFullYear(2023);
date1.setMonth(2);
date1.setDate(30);
date1.setHours(23);
date1.setMinutes(59);
date1.setSeconds(59);

// 5. 시간을 여러 포맷으로 출력
console.log(date1.toDateString()); //시간제외날짜만출력
console.log(date1.toLocaleString()); //우리나라맞게 현지화해서 시간출력