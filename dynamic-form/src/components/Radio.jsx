

import React, { useState } from 'react'

const Radio =(props) => {
    const {optionsList,lableText,name,setData} = props
  


    const [roll,setRoll]=useState("")
    const handleChange = (e)=>{
        const{value}=e.target;        
        setRoll(value)
        setData(value)
        console.log("rollValue",value);
        

    }
  return (
    <div>
        <label>{lableText} </label> 
            {optionsList.map((Roll)=>(
                <div key={Roll}>
                    <input type='radio' value={Roll} checked={Roll===roll} name={name} onChange={handleChange}/>
                  {Roll}
                </div>
                
            )                
            )}
        
           
      
      
    </div>
  )
}

export default  Radio
