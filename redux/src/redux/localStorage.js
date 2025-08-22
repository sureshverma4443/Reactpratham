
export const savestate = (state)=>{
    try{
        const serializedState = JSON.stringify(state);
        localStorage.setItem("reduxState",serializedState)
    }catch(e){
        console.log("could not  save state",e);
        
    }
}


export const loadstate = ()=>{
       try{
        const serializedState =localStorage.getItem("reduxState");
        if(serializedState===null)return undefined
        return JSON.parse(serializedState)
    }catch(e){
        console.log("could not  save state",e);
        return undefined
        
    }
    

}