import { useEffect } from "react";

const ComponentA = ()=>{

     useEffect(()=>{
        return ()=>{

            console.log("unmount")
        }
           
        },[]);


    return(
        <>
        <h1>ComponentA</h1>
        </>
    )
}
export default ComponentA