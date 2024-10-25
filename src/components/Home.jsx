import React, { useEffect, useState } from 'react'
import './Home.css'
import { useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToPaster, updateToPaster } from '../redux/pasteSlice';

function Home() {
    const [titel,setTitel]=useState("");
    const [value,setValue]=useState("");
    const [searchParam,setSearchParam]=useSearchParams();
    const pasteId=searchParam.get("pasteId");

    const allPaste = useSelector((state) => state.counter.pastes);

    const dispatch=useDispatch();

    function handleClick(){
        const paste={
            titel:titel,
            content:value,
            _id:pasteId || Date.now().toString(36),
            createdAt:new Date().toISOString(),
        }
        if(pasteId){
            dispatch(updateToPaster(paste));
        }else{
            dispatch(addToPaster(paste));

        }
        setTitel("");
        setValue("");
        setSearchParam({});
    }

    useEffect(() => {

        if(pasteId){
            const paste = allPaste.find((item) => item._id === pasteId);
                setTitel(paste.titel);
                setValue(paste.content);
        }else{
            setTitel("");
            setValue("");
        }
      
    }, [pasteId])
    

  return (
    <div className='home'>
        <div className='inpBtn'>
            <div className='inp'><input placeholder='write here . . .' type="text" value={titel} onChange={(e)=>setTitel(e.target.value)}/></div>
            <div ><button className='btn' onClick={handleClick}>{pasteId?"update paste": "create paste"}</button></div>
        </div>
        
        <div >
            <textarea className='textArea' value={value} onChange={(e)=>setValue(e.target.value)} placeholder='write something here'></textarea>
        </div>
        
    </div>
  )
}

export default Home