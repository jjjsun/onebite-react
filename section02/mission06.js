//Quiz1
function splitAndCombine(arr){
    let arr1 = arr.slice(0, 4);
    let arr2 = arr.slice(4,);
    let newarr = arr2.concat(arr1);
    return newarr;
}
let arr = [0, 1, 2, 3, 4, 5, 6, 7];
const result = splitAndCombine(arr);
console.log(result);

//Quiz2
function printClickEventLogs(logs){
    logs
        .filter((log)=>log.type==="click")
        .forEach((log) => console.log(`${log.type} :: ${new Date(log.date).toLocaleString()}`)
    );
}
printClickEventLogs([
    {
        type: "click",
        date: "2023-01-01T12:00:00Z",
    },
    {
        type: "hover",
        date: "2023-01-01T12:10:00Z",
    },
    {
        type: "scroll",
        date: "2023-01-01T12:15:00Z",
    },
    {
        type: "click",
        date: "2023-01-01T12:20:00Z",
    },
]);

//Quiz3
function getDiscountedMenus(menus){
    return menus.map((menu)=> ({
        ...menu,
        discountedPrice: menu.price - 500,
    }))
}
const discountedMenus = getDiscountedMenus([
    {itemId: 1, name: "아메리카노", price: 3000},
    {itemId: 2, name: "라떼", price: 3500},
    {itemId: 3, name: "초콜릿 케이크", price: 5000},
    {itemId: 4, name: "크로와상", price: 2000},
]);

console.log(discountedMenus);

//Quiz4
function getSortedBooks(books){
    return books.toSorted((a,b)=>{
        const aTimeStamp = a.published.getTime();
        const bTimeStamp = b.published.getTime();
        return bTimeStamp-aTimeStamp;
    })
};

const sortedBooks = getSortedBooks([
    {
        title: "한입 리액트",
        published: new Date("2023. 04. 06"),
    },
    {
        title: "웹 프론트엔드 첫 걸음",
        published: new Date("2024. 04. 30"),
    },
    {
        title: "이펙티브 타입스크립트",
        published: new Date("2021. 06. 27"),
    },
    {
        title: "클린코드",
        published: new Date("2013. 12. 24"),
    },
]);

console.log(sortedBooks);