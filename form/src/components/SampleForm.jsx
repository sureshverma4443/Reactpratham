import React, { useState } from 'react'

 const SampleForm = () => {
    const [form,setForm] = useState()


     const handleChange = () =>{

     }
  return (
    
    <div>
            <h1>sample form</h1>
        <form >
            <div>
                <label >User Name</label>
                <input type='text' name='userName' value={form.userName} onChange={handleChange}/>
            </div>
            <div>
                <label >Email</label>
                <input type='text' name='userName' value={form.userName} onChange={handleChange}/>
            </div>
            <div>
                <label >Password</label>
                <input type='text' name='userName' value={form.userName} onChange={handleChange}/>
            </div>
        </form>
    </div>
    
  )
}

export default SampleForm; 
