import  { useCallback, useState } from 'react'
import Mycomponent from './components/usememo';
import CallBackButton from './components/useCallback';


function Home (){
    const [count,setCount]=useState(0);
    const [name,setName] = useState ('John');

    const handleclick = useCallback (()=>{
        console.log("clcked");
        
    },[])

    return(
        <>
            <h1>React.memo Example</h1>
        <div className='card'>
            <button onClick={()=>setCount(count+1)}> Increment{count} </button>
        </div>
        <div className='card'>
            <button onClick={()=>setName("jane")}> Change Name </button>
        </div>
        <Mycomponent name ={name}/>
        <div>
            <h1>CallBack Example</h1>

            <CallBackButton onClick2 ={handleclick}/>
        </div>

      </>
    )

}


export default Home;


