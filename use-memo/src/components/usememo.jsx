import React from "react";

const  Mycomponent = React.memo(({name}) =>{
    console.log("Mycomponent rendered");
    
  return <p>Hello</p>
  
})

export default Mycomponent;
