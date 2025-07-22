import Chance from "chance";
const change = new Chance();

//chance를 이용해 무작위 이름 생성해 반환
export function getRandomName(){
    return change.name();
}

//chance를 이용해 무작위 이메일 생성해 반환
export function getRandomEmail(){
    return change.email();
}