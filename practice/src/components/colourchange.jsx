import { useState } from "react"


const Colourchange = (props)=>{
    const {text,setText}=props
    const [colour,setColour]=useState("#0000ff")

    const handColourChage =()=>{
        setColour(colour==="#A020F0"?" #0000ff": "#A020F0")
        // setText(text==="lorem"?"suresh":"lorem")
    }



    return(
        <>
        <div  >
            <div style={{width:"300px",height:"400px",border:"1px solid white",background:colour}}>
                 card
            <h1>{text}</h1>
            <button onClick = {()=>setColour(colour==="#A020F0"?" #0000ff": "#A020F0")}>colourchange</button>
            <button style={{display:"block"}} onClick = {handColourChage}>colourchange</button>
            </div>
            
            <button onClick={()=>setText(text==="lorem"?"suresh":"lorem")}>textchange</button>


       


        </div>
    </>
    )
}

export default Colourchange