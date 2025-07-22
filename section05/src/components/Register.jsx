import { useState,useRef } from "react";

// 간단한 회원가입 폼
// 1. 이름
// 2. 생년월알
// 3. 국적
// 4. 자기소개

const Register = () => {

    //사용자가 입력한 값들을 state로 보관하는 방법
    const [input, setInput] = useState({
        name: "",
        birth: "",
        country: "",
        bio: ""
    })
    const countRef = useRef(0);
    const inputRef = useRef();
    

    const onChange = (e) =>{
        countRef.current++;
        console.log(countRef.current);
        setInput({
            ...input, //...input으로 스프레드 연산자를 이용해서 관련없는 값들은 그대로 유지되도록 만들고
            [e.target.name]:e.target.value, //변경하고자 하는 프로퍼티의 값만 바꿔주도록 설정
            //[e.target.name] <- 이거는 e.target.name이라는데에 저장되어있는 값으로 지금 프로퍼티의 키를 설정하겠다는 말.
            //여기에는 이벤트가 발생한 속성의 name태그가 들어가 있음
        });
    }

    const onSubmit = () => {
        if(input.name === ""){
            //이름을 입력하는 DOM 요소 포커스
           inputRef.current.focus();
        }
    }

    return (
        <div>

            <div>
                <input 
                    ref={inputRef}
                    name="name"
                    value={input.name}
                    onChange={onChange} 
                    placeholder={"이름"}
                />
            </div>
            <div>
                <input 
                    name="birth"
                    value={input.birth}
                    type="date"
                    onChange={onChange}

                />
            </div>
            <div>
                <select name="country" value={input.country} onChange={onChange}>
                    <option value=""></option>
                    <option value="kr">한국</option>
                    <option value="us">미국</option>
                    <option value="uk">영국</option>
                </select>
            </div>
            <div>
                <textarea name="bio" value={input.bio} onChange={onChange}/>


            </div>
            <button onClick={onSubmit}>제출</button>
        </div>
    )
}

export default Register;