import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import './ViewPaste.css';

function ViewPaste() {
  const {id} = useParams();
  const allPaste=useSelector((state)=>state.counter.pastes);
  const paste = allPaste.filter((item) => item._id === id)[0];

  return (
    <div className='inp-view'>
      <input type="text" onChange={(e)=>e.target.value} value={paste.titel}/>

      <div >
        <textarea  className='textArea' onChange={(e)=>e.target.value} value={paste.content}></textarea>
      </div>
    </div>
  )
}

export default ViewPaste