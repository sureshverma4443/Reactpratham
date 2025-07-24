

import React, { useState } from 'react'

const  Select=(props)=> {
    const{optionsList,selectLable,setData}=props

    const [selectValue,setSelectValue]=useState("")


  const handleSelectChange=(e)=>{
    const {value}=e.target;
    setSelectValue(value);
    setData(value);
  }
 console.log("selectedValue",selectValue);
 
  return (
    <div>
        <div>
        <label>{selectLable}</label>
        <select value={selectValue} onChange={handleSelectChange}>
            <option key="" value={""}>select</option>
            {optionsList.map((subject)=>(
                <option key={subject} value={subject.toLowerCase()}>{subject}</option>
            ))

            }
        </select>
        </div>
        <div>
            
           
        </div>
        
      
    </div>
  )
}

export default Select
