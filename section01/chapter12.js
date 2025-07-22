//1. 함수 표현식 (함수표현식으로 만든것은 호이스팅 X)

function funcA(){
    // console.log("funcA");
}

let varA = funcA;
varA();

let varB = function (){ //익명함수
    // console.log("funcB");
}
varB();

//2. 화살표 함수
let varC =  (value) => {
    console.log(value);
    return value + 1};
console.log(varC(10));