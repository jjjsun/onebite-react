//1. 배열의 구조 분해 할당
let arr = [1, 2, 3];

let [one, two, three, four = 4] = arr;

//2. 객체의 구조 분해 할당
let person = {
    name: "박재선",
    age: 24,
    hobby: "야구",
};

//객체는 중괄호로 구조분해할당합니다. 배열은 []
let {name, age : myAge, hobby, extra = "hello",} = person;


//3.객체의 구조 분해 할당을 이용해서 함수의 매개변수를 받는 방법
constfunc = ({name, age, hobby, extra}) =>{
    console.log(name, age, hobby, extra);
}
func(person);