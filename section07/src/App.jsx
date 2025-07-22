// import './App.css'
// import Viewer from './Components/Viewer'
// import Controller from './Components/Controller'
// import { useState, useEffect, useRef } from 'react'
// import Even from './Components/Even'


// function App() {

//   const [count, setCount] = useState(0);
//   const [input, setInput] = useState("");

//   const isMount = useRef(false);

//   // 1.마운트 : 탄생
//   useEffect(()=>{
//     console.log("mount")
//   },[])
//   // 2.업데이트 : 변화, 리랜더링
//   useEffect(()=>{
//     if(!isMount.current){
//       isMount.current = true;
//       return;
//     }
//     console.log("update");
//   }) 
//   // 3.언마운트 : 죽음



//   const onClickButton = (value) => {
//     setCount(count + value)
//   };

//   return (
//     <div className="App">
//       <h1>Simple Counter</h1>
//       <section>
//         <input value={input} onChange={(e)=>{
//           setInput(e.target.value)
//         }} />
//       </section>
//       <section>
//         <Viewer count={count}/>
//         {count % 2 === 0 ? <Even /> : null}
//       </section>
//       <section>
//         <Controller onClickButton={onClickButton}/>
//       </section>
      
//     </div>
//   )
// }

// export default App


import './App.css'
import { useState } from 'react'

function CurrencyInput({currency, value, onChange}){
  return (
    <div>
      <label>{currency}:</label>
      <input 
        type="number"
        value={value}
        onChange={(e)=>onChange(currency, e.target.value)}
      />
    </div>
  )
}
const EXCHANGE_RATE = 1400;

function App() {

  const[state,setState] = useState({
    krw: 0,
    usd: 0,
  })

  const onChange = (currency, value) => {
    console.log({currency, value});
    if (currency === "krw"){
      setState({
        krw: value,
        usd: value / EXCHANGE_RATE,
      })
    }
    else{
      setState({
        krw: value * EXCHANGE_RATE,
        usd: value,
      })
    }
  }



  return (
    <div>
      <h1>환율 변환기(KRW-USD)</h1>
      <CurrencyInput
        currency={"krw"}
        value={state.krw}
        onChange={onChange}
      />
      <CurrencyInput
        currency={"usd"}
        value={state.usd}
        onChange={onChange}
      />

    </div>
  )
}

export default App
