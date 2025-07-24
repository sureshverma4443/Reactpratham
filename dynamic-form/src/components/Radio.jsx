

import React, { useState } from 'react'

const Radio =(props) => {
    const {optionsList,lableText} = props

    const [roll,setRoll]=useState("")
    const handleChange = (e)=>{
        const{value}=e.target;
        setRoll(value)
        console.log("rollValue",value);
        

    }
  return (
    <div>
        <label>{lableText} </label> 
            {optionsList.map((Roll)=>(
                <div key={Roll}>
                    <input type='radio' value={Roll.toLowerCase()} onChange={handleChange}/>
                  {Roll}
                </div>
                
            )                
            )}
        
           
      
      
    </div>
  )
}

export default  Radio
