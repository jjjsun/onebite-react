import './ContactItem.css'
import { memo,useContext } from 'react';
import { ContactDispatchContext } from '../App';
const ContactItem = ({id, name, email}) =>{
    const {onDelete} = useContext(ContactDispatchContext);
    return (
        <div className="ContactItem">
            <div className="ItemName">{name}</div>
            <div className="ItemEmail">{email}</div>
            <button onClick={() => onDelete(id)}>🗑️Remove</button>
        </div>
    )
} 

export default memo(ContactItem);