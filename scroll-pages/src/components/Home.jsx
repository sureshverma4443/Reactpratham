
import React, { useEffect, useState } from 'react'


const studentWithLoading = withLoading(studentProfile);


const Home = () => {
    const [loading,setLoading]=useState(true)
    const [student,setstudent] = useState({name:"Jonh doe"})

    useEffect(()=>{
        setTimeout(()=>{
            setLoading(false)
            setstudent({name:"Jonh Doe"})
        },2000)
    })
  return (
    <div>
      <h1>Hoc Demo</h1>
      <studentWithLoading isLoading ={true} name={student.name}/>
      l<h1 className='text-2xl font-bold '>Welcome to the Infinite Scroll App</h1>
      <p>use the navigation above to explore products.</p>
    </div>
  )
}

export default Home