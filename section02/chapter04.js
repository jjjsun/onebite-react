//1. Spread 연산자
// -> Spread: 흩뿌리다, 펼치다 라는 뜻
// -> 객체나 배열에 저장된 여러개의 값을 개별로 흩뿌려주는 역할

let arr1 = [1, 2, 3];
let arr2 = [4, ...arr1, 5, 6];


let obj1 = {
    a: 1,
    b: 2,
};
let obj2 = {
    ...obj1,
    c: 3,
    d: 4,
};

function funcA(p1, p2, p3) {
    console.log(p1, p2, p3);
}
funcA(...arr1);

///...배열이름, ...객체이름 이렇게 활용해서 객체나 배열의 값을 흩뿌려놓을수 있음


//2. Rest 매개변수
//-> Rest는 나머지, 나머지 매개변수

//...rest 매개변수를 사용해서 배열에 한방에 다 넣을수 있는점.
function funcB(one, two, ...rest){
    console.log(rest);
}
//rest 매개변수는 지금부터나오는 모든 인수들을 다 배열에 저장하기 때문에, rest뒤에는 추가로 매개변수가 올수 없음. 앞에만 가능
//rest 매개변수는 ...만 붙이면 되는거라 이름은 마음대로 해도됨. ex) ...args, ...ds 등등

funcB(...arr1);