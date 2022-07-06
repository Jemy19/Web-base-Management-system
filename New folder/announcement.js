import React,{useState, useEffect} from 'react'
import { setDoc, doc, collection, addDoc, Timestamp, serverTimestamp, onSnapshot } from "firebase/firestore";
import {auth, db, storage} from '../../firebase'
import { v4 as uuid } from 'uuid';
import { useNavigate } from 'react-router-dom'
import { TextareaAutosize } from '@material-ui/core';
import Announcementlist from './announcementlist';
import './announcement.css'

function Announcement({inputs, title}) {
    const [data,setData] = useState({})
    const announcementId = uuid();
    const handleAdd = async (e) => {
    
        e.preventDefault();

          await setDoc(doc(db, "announcement", announcementId), {
            ...data,
            timeStamp: serverTimestamp(),
          })
      };

    const handleInput = (e) =>{
        const id = e.target.id
        const value = e.target.value
       
        setData({...data, [id] : value})
    }
  
    console.log(data)

  return (
  <>
  <div className="Due">
  <div className="DueContainer">
     <div className="top">
          <h1>{title}</h1>
    </div>
    <div className="newscontainer">
        <form className = "newsform" onSubmit = {handleAdd}>
            <h1 style = {{color:"black", fontSize:"30px",textAlign:'center',fontSize:'40px'}}>Announcement</h1>
             <input style = {{width:'80%'}} placeHolder = 'title' className='newsinput' type='text' id='title' onChange={handleInput} />
            <input style = {{marginLeft:"-150px",width:'50%'}} placeHolder = 'date' className='newsinput' type='date' id='date' onChange={handleInput} />
            <p style = {{marginLeft:"-190px"}}> Dear Tenants</p>
            <textarea placeHolder = 'Details...'style = {{border:'1px solid black', width:"100%",padding:"10px"}}rows='7' cols = '1000;' className='' type='text' id='body' onChange={handleInput} />     
        <button  className = "duebutton" type="submit">
             Submit
            </button>
        </form>
</div>

<Announcementlist />
</div>

</div>

</>
  )
}

export default Announcement