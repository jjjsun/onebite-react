// const moduleData = require("./math");
// console.log(moduleData.add(1, 2));
// console.log(moduleData.sub(1, 2));

// const {add, sub} = require("./math");

//import mul from "./math.js";
import mul, {add, sub} from "./math.js";


// console.log(add(1, 2));
// console.log(sub(1, 2));
// console.log(mul(2, 3));

//라이브러리에서 어떠한 값을 가져올때는 
//경로를 써주는게 아니라, from뒤에 라이브러리의 이름만 가져오면됨
import randomColor from "randomcolor";
//import 모듈명 from 모듈명라이브러리이름
//얘는 
const color = randomColor();
console.log(color);
