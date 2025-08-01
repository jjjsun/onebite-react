//1. 객체 생성
let obj1 = new Object(); //객체 생성자
let obj2 = {}; //객체 리터럴 (대부분 사용)

//2. 객체 프로퍼티 (객체속성) key : value
let person = {
    name : "박재선",
    age : 24,
    hobby : "baseball",
    job : "student",
    extra : {},
    10 : 20,
    "like cat": true,
}

//3. 객체 프로퍼티를 다루는 방법
//3-1. 특정 프로퍼티에 접근 (점 표기법, 괄호 표기법)
let name = person.name;

let age = person["age"]; //접근하려는 프로퍼티 문자열로 접근해야함. "" 무조건 필요.

let property = "hobby";
let hobby = person[property];

//3-2. 새로운 프로퍼티를 추가하는 방법
person.job = "fe developer";
person["favoriteFood"] = "간장게장";

//3-3. 프로퍼티를 수정하는 방법
person.job = "entertainer"
person['favoriteFood'] = "회";

//3-4. 프로퍼티를 삭제하는 방법
delete person.job;
delete person["favoriteFood"];

//3-5. 프로퍼티의 존재 유무를 확인하는 방법 (in 연산자)
let result1 = "name" in person;
let result2 = "cat" in person;
console.log(result2);