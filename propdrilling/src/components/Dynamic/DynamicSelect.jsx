
import React from 'react'
const HobbIES = 
  ["Gyming",
  "Running",
  "Swiming",
  "Gardening",
  "Football"
]


const DynamicSelect=(props)=> {
  const {setHobby}=props
  const [selectValue,setSelectValue]=useState("")
  const handleSelectChange = (e)=>{
    const {value} =e.target;
    setSelectValue(value)
    setHobby(value)
  }
  console.log("setSelectValue",selectValue);
  
  return (
    <select value={selectValue} onChange={handleSelectChange} name='dynamic-select'>
      <option value="">Select hobby</option>
      {HobbIES.map((hobby)=>{
        <option key={hobby} value={hobby.toLowerCase()}></option>
      })}
      
      {hobby}</select>
  )
}

export default DynamicSelect
