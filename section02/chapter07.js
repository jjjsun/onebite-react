// 6가지의 요소 조작 메서드

// 1. push
//배열의 맨 뒤에 새로운 요소를 추가하는 메서드
let arr1 = [1, 2, 3];
const newLength = arr1.push(4, 5, 6, 7);

// 2. pop
//배열의 맨 뒤에 있는 요소를 제거하고, 반환
let arr2 = [1, 2, 3];
const poppedItem = arr2.pop();

// 3. shift
//배열의 맨 앞에 있는 요소를 제거, 반환
let arr3 = [1, 2, 3];
const shiftedItem = arr3.shift();

// 4. unshift
//배열의 맨 앞에 새로운 요소를 추가하는 매서드
let arr4 = [1, 2, 3];
const newLength2 = arr4.unshift(0);
//console.log(arr4);
//console.log(newLength2);
//참고로, push랑 pop은 새로운요소가 추가된 배열의 길이를 반환함. newlength = ~ 이렇게 할 수 있음

//unshift와 shift는 pop과 push보다 느림 ->따라서 되도록이면 push나 pop으로 해결하는게 좋다

// 5. slice
// 마치 가위처럼, 배열의 특정 범위를 잘라내서 새로운 배열로 반환
let arr5 = [1, 2, 3, 4, 5];
let sliced = arr5.slice(2, 5);
let sliced2 = arr5.slice(2);
let sliced3 = arr5.slice(-1); //->뒤에서부터 하나만 잘라라
let sliced4 = arr5.slice(-3); //->뒤에서부터 세개만 잘라라

//3,4,5가 잘려나갔다고해서 원본 배열은 바뀌지않음!!
//console.log(arr5);

//6. concat
//두 개의 서로다른 배열을 이어붙여서 새로운 배열을 반환
let arr6 = [1, 2];
let arr7 = [3, 4];

let concatedArr = arr6.concat(arr7);
console.log(concatedArr);