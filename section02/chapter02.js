//  function returnFalse(){
//     console.log("False함수")
//     return undefined;
//  }
//  function returnTrue(){
//     console.log("True함수");
//     return 10;
//  }

//  console.log(returnFalse() && returnTrue());


//단략 평가 활용 사례
function printName(person){
    const name = person && person.name;
    console.log(name || "person의 값이 없음");
}
printName();
printName({name : "박재선"});