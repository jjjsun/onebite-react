//5가지 요소 순회 및 탐색 매서드
// 1.forEach
// 모든 요소를 순회하면서, 각각의 요소에 특정 동작을 수행시키는 메서드
let arr1 = [1, 2, 3];
arr1.forEach(function(item, idx, arr) {
//    console.log(idx, item * 2);
});

let doubledArr = [];

arr1.forEach((item) => {
    doubledArr.push(item * 2);
});
//console.log(doubledArr);

//인제부터 배열탐색메서드
// 2.includes
//배열의 특정 요소가 있는지 확인하는 그런 메서드
let arr2 = [1, 2, 3];
let isInclude = arr2.includes(3);
// console.log(isInclude);

// 3. indexOf
// 특정요소의 인덱스(위치)를 찾아서 반환하는 메서드
let arr3 = [1, 2, 3];
let index = arr3.indexOf(2);

// 4. findIndex
// 모든 요소를 순회하면서, 콜백함수를 만족하는 그런
// 특정 요소의 인덱스(위치)를 반환하는 메서드
let arr4 = [1, 2, 3];
// const findedIndex = arr4.findIndex((item) =>{
//     if (item %2 !== 0) return true;
// });
//위에거 조금 더 간결하게 표현
const findedIndex = arr4.findIndex((item) => item %2 !== 0);
console.log(findedIndex);

//indexOf는 얕은 비교로 진행하기 때문에 name:"박재선" 같은 객체값은 찾지 못하는 반면
//findIndex는 콜백함수 이용해서 특정 property 값을 기준으로 비교시킬수 있기 때문에, 복잡한 객체값도 조건식만 잘 달면 찾을수 있다
//정리하면, 단순한 원시타입의 값을 찾을때는 indexOf로
//복잡한 객체타입의 값을 찾을때는 findIndex를 사용.

// 5. find
//모든 요소를 순회하면서 콜백함수를 만족하는 요소를 찾는데, 요소를 그대로 반환
let arr5 = [
    {name : "박재선"},
    {name : "정택운"},
];

const finded = arr5.find((item) => item.name === "박재선");

console.log(finded);