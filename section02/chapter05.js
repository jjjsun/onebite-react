//원시타입 = 가변값 (number, boolean, string)
//->값 자체로써 변수에 저장되고 복사된다.
//불변값이다(메모리 값 수정 X)
//-> 원래 값이 메모리상에서 지워지지않고, 새로운 메모리에서 새로운 값을 쓰는것

//객체타입 = 불변값 (object, array, function)
//참조값을 통해 변수에 저장되고 복사된다.
//가변값이다.(메모리 값 수정 O)
//-> 원래 값이 사라지고, 새로 만든 값이 메모리에 있는것.


//앝은 복사
let o1 = {name :"박재선"};
let o2 = o1;
//객체의 참조값을 복사함 -> 이건, o2수정할때, 원본 객체인 o1도 수정될수있어 위험함

//깊은 복사
let o3 = {name :"박재선"};
let o4 = {...o3};
//새로운 객체를 생성하면서 프로퍼티만 따로 복사함->원본 객체가 수정될 일이 없어 안전함
//그니까, 복사해서 새로운곳에 쓰는거니까 원래 원본 객체에는 손상을 입히지 않는거지

