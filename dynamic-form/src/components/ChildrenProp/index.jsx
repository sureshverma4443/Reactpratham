import { Children } from "react";

const Wrapper = ({Children})=>{
    return(
        <div>
            this is my Wrapper commonent
            <div>{Children}</div>
            <button>add</button>
        </div>
    )
}

export default Wrapper;