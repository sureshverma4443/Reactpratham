import React, { useState } from 'react'
import { useMemo } from "react";

const computerHeavyTask = (num,type)=>{
    console.log('computing heavy task...', type);
    let total = 0;
    for (let i = 0; i < 1e7;i++){
         total+= num *Math.random()
    }
    return Math.round(total)
    
}


function withoutMemo ({input}){
    const result = computerHeavyTask(input,"without useMemo");
    return <p> <strong>Without useMemo</strong></p>
}

function withMemo ({input}){
    console.log("with useMemo called");

    const result = useMemo (()=>computerHeavyTask(input,"with useMemo"),[input]);
return <p><stron>With useMemo</stron>{result}</p>
    
}


function practice() {
    constt [input,setInput]= useState(5);
    const [count,setCount] = useState(0)
  return (
    <>
    <h2>useMemo Performance</h2>
    <div>
        <label>Inut <input type='number' value={input} onChange={(e)=>setInput(Number(e.target.value))} style={{marginLeft:"10px"}}/></label>
      
    </div>
     <div>
       <withoutMemo input={input}/>
       <withMemo input={input}/>
    </div>
    <button onClick={()=>setCount((pre)=>pre+1)} style={{marginTop:'20px'}}>Re-render App (count={count})</button>
    </>
  )
}

export default practice;
