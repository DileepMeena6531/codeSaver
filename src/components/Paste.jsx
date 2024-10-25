import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import './Paste.css'
import { removeFromPaster } from '../redux/pasteSlice';
import toast from 'react-hot-toast';
import { format } from 'date-fns';

function Paste() {
  const pastes = useSelector((state) => state.counter.pastes);
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();

  const filterData = pastes.filter((paste) => paste?.titel?.toLowerCase().includes(searchTerm.toLowerCase()));

  const handleDelete=(pasteId)=>{
    dispatch(removeFromPaster(pasteId));
  }

  const formatDate = (date) => {
    return format(new Date(date), 'd MMM yyyy');
  };

  const handleShare = async (paste) => {
    const shareData = {
      title: paste.titel,
      text: paste.content,
      url: `${window.location.origin}/pastes/${paste._id}`
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
        toast.success("Shared successfully");
      } catch (err) {
        toast.error("Error sharing");
      }
    } else {
      navigator.clipboard.writeText(shareData.url);
      toast.success("Share link copied to clipboard");
    }
  };

  return (
    <>
    <div className="paste-container">
      <div className='pasteInp'>
        <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)
        } placeholder="Search..." />
      </div>
      <div className='allBtn'>
        {
          filterData.length > 0 && filterData.map((paste) => {
            return (
              <div className='contentPaste' key={paste._id}>
                <p className='title'>Title: {paste.titel}</p>
                <div className='button'>
                <div><button className='btn1'><a style={{color:"white",textDecoration:'none'}} href={`/pastes/${paste._id}`}>View</a></button></div>
                  <div><button className='btn1'><a style={{color:"white",textDecoration:'none'}} href={`/?pasteId=${paste?._id}`}>Edit</a></button></div>
                  <div><button className='btn1' onClick={()=>handleDelete(paste._id)}>delete</button></div>
                  <div><button className='btn1' onClick={()=>{navigator.clipboard.writeText(paste.content), toast.success("copy content")}}>copy</button></div>
                  <div><button className='btn1' onClick={() => handleShare(paste)}>Share</button></div>
                </div>
                <div className='form-date'><i>{formatDate(paste.createdAt)}</i></div>
              </div>
              
            )
          })
        }
      </div>
    </div>
    </>
  )
}

export default Paste