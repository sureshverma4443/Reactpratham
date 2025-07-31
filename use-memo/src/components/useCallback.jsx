 import React from "react";

const CallBackButton = React.memo(({onClick2})=>{
    console.log("button rendered");
    return <button onClick={onClick2}>click me</button>
    
 })

 export default CallBackButton;