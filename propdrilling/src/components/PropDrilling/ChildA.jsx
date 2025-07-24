import React from 'react'

const ChildA = (props)=> {
  const {userProps} = props
  return (
    <div>
      <h1>this is child A</h1>
      <h6>{props.headding}</h6>
      <p>{userProps.name}</p>
      <GandChildA />
    </div>
  )
}

export default ChildA