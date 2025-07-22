//Quiz 1
function delay(ms){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve();
        }, ms);
    })
}

async function main(){
    console.log("3초 후 결과를 공개하겠습니다!");
    await delay(3000);
    console.log("승자는 이정환!");
}

main(); 


//Quiz 2

//1. 주문하는 기능
function receiveOrder(){
    return new Promise((resolve)=> 
        setTimeout(()=>{
            console.log("주문 접수가 완료되었습니다.");
            resolve("주문번호: 123");
        }, 2000)
    );
}

//2. 주문을 처리하는 기능
function processOrder(orderId){
    return new Promise((resolve)=>
        setTimeout(()=>{
            console.log(`[${orderId}] 주문이 처리되었습니다.`);
            resolve(orderId);
        }, 2000)
    );
}

//3. 주문을 취소하는 기능
function cancelOrder(orderId){
    return new Promise((resolve)=>
        setTimeout(() => {
            console.log(`[${orderId}] 주문이 취소되었습니다.`);
            resolve();
        }, 1500)
    );
}

const result = receiveOrder();
result.then((result)=>{
    return result;
}).then((result)=>{
    return processOrder(result);
}).then((result)=>{
    return cancelOrder(result);
}).catch((err)=>{
    console.log(err);
})

// receiveOrder()
//     .then((orderId)=> processOrder(orderId))
//     .then((orderId) => cancelOrder(orderId))
//     .catch((err) => console.error(err));