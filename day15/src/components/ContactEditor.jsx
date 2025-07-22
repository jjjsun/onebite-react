import "./ContactEditor.css"
import { useState, useRef, useContext } from "react"
import { ContactDispatchContext } from "../App";
const ContactEditor = () => {

    const {onCreate} = useContext(ContactDispatchContext);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const NameRef = useRef("");
    const EmailRef = useRef("");

    const onChangeName = (e) => {
        setName(e.target.value);
    }
    const onChangeEmail = (e) => {
        setEmail(e.target.value);
    }

    const onKeydown = (e) => {
        if(e.keyCode === 13){
            onSubmit();
        }
    }

    const onSubmit= () => {
        if(!name){
            NameRef.current.focus()
            return;
        } else if (!email){
            EmailRef.current.focus()
            return;
        }
        onCreate(name, email);
        setName("");
        setEmail("");
    }
    
    return (
        <div className="AddContact">
            <h3>Add Contact</h3>
            <div>
                <input ref = {NameRef} value={name} onKeyDown={onKeydown} onChange={onChangeName} className="Name" placeholder="이름 ..."></input>
                <input ref = {EmailRef} value={email} onKeyDown={onKeydown} onChange={onChangeEmail} className="Email" placeholder="연락처(이메일)..."></input>
            </div>
            <button onClick={onSubmit}>Add</button>
        </div>
    )
}

export default ContactEditor;