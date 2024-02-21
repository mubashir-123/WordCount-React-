/* eslint-disable no-unused-vars */


import React , { useState, useRef } from 'react';

const App = () => {
    const [length, setLength] = useState(0);
    const Val = useRef(); 

    function myText(){
      setLength(Val.current.value.length);
    }
  return (
    <>
<div className='flex flex-col items-center mt-32'>
     <h1 className="text-3xl text-white" >Enter text here</h1>
       <textarea className='mt-4 border-solid border-2 border-black ' cols="90" rows="10" onChange={myText} ref={Val}></textarea> <br/>
       <p className='text-white text-lg'>Word Length is {length}</p>
   </div> 
    </>

  )
}

export default App


