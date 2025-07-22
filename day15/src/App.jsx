import "./App.css"
import Header from "./components/Header"
import ContactEditor from "./components/ContactEditor"
import List from "./components/List"
import {useState, useRef, useCallback, createContext, useMemo} from 'react'


const mockData = [
    {
        id: 0,
        name: "이정환",
        email: "king32@gmail.com"
    },

]


export const ContactStateContext = createContext();
export const ContactDispatchContext = createContext();

function App() {


    const [contact, setContact] = useState(mockData);
    const idRef = useRef(1)

    const onCreate = useCallback((name,email)=>{
        const newContact = {
            id: idRef.current++,
            name: name,
            email: email,
        };
        setContact(prev => [newContact, ...prev ]);
    },[]);

    const onDelete = useCallback((targetId) => {
        setContact(prev => prev.filter((it) => it.id!== targetId));
    },[])

    const memoizedDispatch = useMemo(
        ()=>({onCreate, onDelete}),[]
    );

    return(
        <div className="App">
            <Header />
            <ContactStateContext.Provider value={contact}>
                <ContactDispatchContext.Provider value={memoizedDispatch}>
                    <ContactEditor />
                    <List />
                </ContactDispatchContext.Provider>
            </ContactStateContext.Provider>

        </div>
    )
}

export default App;

