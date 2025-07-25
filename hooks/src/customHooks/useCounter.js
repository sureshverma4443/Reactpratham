import { useState } from "react"


export const useCounter = (initialValue)=>{
    const [count,setCount]= useState(initialValue||10);
    
}

