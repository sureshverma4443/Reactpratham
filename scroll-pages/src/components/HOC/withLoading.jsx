

import React from 'react'

 const withLoading = (Wrapppedcomponent) {
  return  function EnhanceComponent({isLoading,...props} ){
    if(isLoading){
        return <p>Loading...</p>
    }
    return <Wrapppedcomponent {...prps}/>
  }
}

export default withLoading
