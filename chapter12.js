// function add(a,b){
//     setTimeout(()=> {
//         const sum = a + b;
//         console.log(sum);
//     }, 3000);
// }
// add(1,2);

//여기서 sum을 함수 밖에 scope에서도 쓰고싶다?
//비동기작업에서 콜백함수를 호출하도록 설정하면된다
// function add(a,b, callback){
//     setTimeout(()=> {
//         const sum = a + b;
//         callback(sum);
//     }, 3000);
// }
// add(1,2, (value)=>{
//     console.log(value);
// });


//음식을 주문하는 상황
function orderFood(callback){
    setTimeout(()=>{
        const food = "떡볶이";
        callback(food);
    }, 3000);
}

function cooldownFood(food, callback){
    setTimeout(()=>{
        const cooldownedFood = `식은 ${food}`;
        callback(cooldownedFood)
    }, 2000);
}
function freezeFood(food, callback){
    setTimeout(()=>{
        const freezedFood = `냉동된 ${food}`;
        callback(freezedFood);
    }, 1500)
}

orderFood((food)=>{
    console.log(food);
    cooldownFood(food, (cooldownedFood)=>{
        console.log(cooldownedFood);
        freezeFood(cooldownedFood,(freezedFood)=>{
            console.log(freezedFood);
        });
    });
})
