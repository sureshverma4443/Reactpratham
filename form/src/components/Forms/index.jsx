import { useState } from "react"





const Forms = ()=>{

    const [formData,setFormData]=useState({
        description : "",
        gender:"",
        shift:"",
        hobbies:[]

    });
    const handleFieldChange = e =>{
        const {name,value}=e.target;
        setFormData({
            ...formData,
            [name]:value
        })
    }
    const handleSelectChange= (e)=>{
        console.log("e",e)
        const {value,checked} = e.target;
        if(checked){
            setFormData({
                ...formData,
                hobbies:[...formData.hobbies,value]
            })
        }else{
            const filteredHobbies = formData.hobbies.filter((hobby)=>hobby!==value);
            setFormData({
                ...formData,
                hobbies:filteredHobbies
            })
        }
    }

    <div>
        <form>
            <label>Description</label>
            <textarea name="description" value={formData.description} onChange={handleFieldChange}/>
            <div>
                <label>Gender</label>
                <select value={formData.gender} onChange={handleFieldChange} name="gender">
                    <option value ="">Select</option>
                    <option value ="male">Male</option>
                    <option value ="female">Female</option>
                    <option value ="other">Other</option>

                </select>
                <div/>

                <div>
                    <label>
                        morning
                        <input type="radio" name="morning" onChange={handleFieldChange}/>
                    </label>
                    <label>
                        evening
                        <input type="radio" name="evening" onChange={handleFieldChange}/>
                    </label>
                </div>
                <div>
                    <span>Hobbies:</span>
                    <label>
                        Music
                        <input type="checkbox" value={music} checked={formData.hobbies.includes("music") } onChange={handleSelectChange}/>
                    </label>
                    <label>
                        Gym
                        <input type="checkbox" value={gym} checked={formData.hobbies.includes("gym") } onChange={handleSelectChange}/>
                    </label>
                    <label>
                        Gardening
                        <input type="checkbox" value={gardening} checked={formData.hobbies.includes("gardening") } onChange={handleSelectChange}/>
                    </label>
                </div>
                <div/>
            </div>
        </form>
    </div>

}

export default Forms