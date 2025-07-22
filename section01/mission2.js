//Quiz 1
const x = 15;
const y = 20;
let max;
if(x > y){
    max = x;
} else{
    max = y;
}
console.log(max);
//Quiz 2
const a = true;
let type = typeof(a);
switch(type){
    case "number":{
        console.log("숫자");
        break;
    }
    case "string":{
        console.log("문자열");
        break;
    }
    case "boolean":{
        console.log("불리언");
        break;
    }
}
//Quiz3
let temperature = 10;
if (temperature >= 20){
    console.log("더움");
} else if (temperature >= 10){
    console.log("적당");
} else if (temperature >= 0){
    console.log("추움.");
} else {
    console.log("매우 추움");
}