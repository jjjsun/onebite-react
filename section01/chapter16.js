//1. 상수 객체
const animal = {
    type: "고양이",
    name: "나비",
    color: "black",
};

//상수는 변경 안된다고 했는데, 추가수정삭제가 돼죠?
animal.age = 2; //추가
animal.name = "까망이"; //수정
delete animal.color; //삭제

//아예 새로운값 수정은 안되고
//저장되어있는 객체값은 가능

//2. 매서드
//-> 값이 함수인 프로퍼티를 말함

const person = {
    name: "박재선",
    //매서드
    sayHi() {
        console.log("안녕!");
    },
};

person.sayHi();
person["sayHi"]();