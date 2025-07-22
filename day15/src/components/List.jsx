import "./List.css"
import ContactItem from "./ContactItem";
import { useContext } from "react";
import { ContactStateContext } from "../App";

const List = () => {
    const contact = useContext(ContactStateContext);
    return (
        <div className="ContactList">
            <h4>Contact List</h4>
            <div className="ContactItem_wrapper">
                {contact.map((contacts)=>{
                    return <ContactItem key={contacts.id} {...contacts}/>
                })}
            </div>
        </div>
    )
}

export default List;