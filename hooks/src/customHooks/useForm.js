import { useState } from "react";


function useForm(initialValue){
    const [value,setValue]=useState(initialValue);

    const handleChange =(e)=>{
        const {name,value}=e.target;
        setValue((prev)=>({...prev,[name]:value}))
    };
    return[value,handleChange]
}

export default useForm