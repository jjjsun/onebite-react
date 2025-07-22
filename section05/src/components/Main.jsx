// JSX 주의 사항
// 1. 중괄호 내부에는 자바스크립트 표현식만 넣을 수 있다.
//     중괄호 안에 if문, for문 같은 조건문을 넣으면 오류발생.
// 2. 숫자, 문자열, 배열 값만 랜더링 된다.
//     {10}, {number}, {[1, 2, 3]} => 랜더링 가능
//     {true}, {undefined}, {null} => 랜더링 불가능
//     const obj = { a:1 }; 이렇게 객체는 그대로 {obj} 라고 하면 오류가 발생한다.
//         그러므로 객체 쓸때는 점표기법 사용해야한다. {obj.a} 이렇게
// 3. 모든 태그는 닫혀 있어야 한다. (여는캐그, 닫는태그 필수 jsx는 무조건 필수임 닫는거 없으면 오류남)
// 4. 최상위 태그는 반드시 하나만 있어야 한다.
//     ->여기서는 main태그. main과 같이 <div>같은거 쓰면 안됨.
//     만약에 최상위태그 감쌀만한게 없으면 빈태그로 하면 된다. <>, </>
//         빈태그 : jsx상에서는 최상위태그가 있다고 판단. 랜더링 될때는 없는것처럼 랜더링되기 때문에 모든 요소가 흩뿌려져있다

import "./Main.css";

const Main = () => {
    const user = {
        name : "이정환",
        isLogin: true,
    };
    if (user.isLogin){
        return <div className="logout">로그아웃</div>;
    }
    else{
        return <div>로그인</div>
    }
    // return (
    //     <>
    //     {user.isLogin ? <div>로그아웃</div> : <div>로그인</div>}
    //     </>
    // );
};

export default Main;