import { useState } from "react";
import useInput from "../hooks/useInput";
// 3가지 hook 관련 팁
// 1. 함수 컴퍼넌트, 커스텀 훅 내부에서만 호출 가능
// 2. 조건부로 호출될 수 없다 (조건문, 반복문 내에서 호출불가)
// 3. 나만의 훅(Custom Hook) 직접 만들 수 있다.

//커스텀 훅 만드는 방법 : 앞에다가 use 붙이면 끝. ex. useInput <- 이러면 react가 알아서 use라는 접두사 사용하는 custom Hook으로 인식함


const HookExam = () => {

    const [input, onchange] = useInput();

    return (
        <div>
            <input value={input} onChange={onchange} />
        </div>
    )
}

export default HookExam;