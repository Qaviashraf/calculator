import { useState } from "react";
import "./comp.css";

export const Buttons  = () => {
  const [num, setnum]= useState("")
  const [prev, setprev]= useState("")
  const keypress = (e)=> {
    setnum(num.concat(e.target.innerText))
  }
const clear = () => {
  setnum("")
  setprev("")
}
  const answer =()=>{
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
            <button className="btn-num" onClick={keypress}>7 </button >
            <button className="btn-num" onClick={keypress}>8</button>
            <button className="btn-num" onClick={keypress}>9</button>
            <button className="btn-op" onClick={keypress}>/</button>
            <button className="btn-num" onClick={keypress}>4</button>
            <button className="btn-num" onClick={keypress}>5</button>
            <button className="btn-num" onClick={keypress}>6</button>
            <button className="btn-op" onClick={keypress}>*</button>
            <button className="btn-num" onClick={keypress}>1</button>
            <button className="btn-num" onClick={keypress}>2</button>
            <button className="btn-num" onClick={keypress}>3</button>
            <button className="btn-op" onClick={keypress}>+</button>
            <button className="btn-num" onClick={keypress}>.</button>
            <button className="btn-num" onClick={keypress}>0</button>
            <button className="btn-equal" id="equal" onClick={answer} >=</button>
            <button className="btn-op" onClick={keypress}>-</button>
          <button className="btn-clear" id="clear" onClick={clear}>clear</button> 
        </div>
      </div> 
    
  
    )
}