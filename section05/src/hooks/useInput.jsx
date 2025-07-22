import { useState } from "react";

//커스텀 훅 만드는 방법 : 앞에다가 use 붙이면 끝. ex. useInput <- 이러면 react가 알아서 use라는 접두사 사용하는 custom Hook으로 인식함

function useInput(){
    const [input, setInput] = useState("");

    const onChange = (e) => {
        setInput(e.target.value);
    };

    return [input, onChange];
}

export default useInput;