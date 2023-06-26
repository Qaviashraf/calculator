import { useState } from "react";
import "./comp.css";

export const Buttons  = () => {
  const [num, setnum]= useState("")
  const [prev, setprev]= useState("")
  const input = (e)=> {
    setnum(num.concat(e.target.innerText))
  }
const clear = () => {
  setnum("")
  setprev("")
}
  const result =()=>{
  setprev(num)
try{
  setnum(eval(num).toString())
}catch(err){
  setnum("error")
}
  }

    return(
      
        <div className="container">
        <h2 className="heading">calculator</h2>
      <div className="screen">
          <input id="recent-scrn" type="text" value={prev}/>
          <input id="main-scrn" type="text" value={num} />
      </div> 
         <div className="buttons">
            <button className="btn-num" onClick={input}>7 </button >
            <button className="btn-num" onClick={input}>8</button>
            <button className="btn-num" onClick={input}>9</button>
            <button className="btn-op" onClick={input}>/</button>
            <button className="btn-num" onClick={input}>4</button>
            <button className="btn-num" onClick={input}>5</button>
            <button className="btn-num" onClick={input}>6</button>
            <button className="btn-op" onClick={input}>*</button>
            <button className="btn-num" onClick={input}>1</button>
            <button className="btn-num" onClick={input}>2</button>
            <button className="btn-num" onClick={input}>3</button>
            <button className="btn-op" onClick={input}>+</button>
            <button className="btn-num" onClick={input}>.</button>
            <button className="btn-num" onClick={input}>0</button>
            <button className="btn-equal" id="equal" onClick={result} >=</button>
            <button className="btn-op" onClick={input}>-</button>
          <button className="btn-clear" id="clear" onClick={clear}>clear</button> 
        </div>
      </div> 
    
  
    )
}