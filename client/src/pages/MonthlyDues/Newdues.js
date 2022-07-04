import React,{useState, useEffect} from 'react'
import './Newdues.css'
import { setDoc, doc, collection, addDoc, Timestamp, serverTimestamp } from "firebase/firestore";
import {auth, db, storage} from '../../firebase'
import { v4 as uuid } from 'uuid';
import { useNavigate } from 'react-router-dom'


function Newdues({inputs, title}) {

    const [data,setData] = useState({})
    const dueid = uuid();
    const navigate = useNavigate()


    const handleAdd = async (e) => {
    
        e.preventDefault();

          await setDoc(doc(db, "dues", dueid), {
            ...data,
            timeStamp: serverTimestamp(),
          })
          navigate('/duelist')
      };

    const handleInput = (e) =>{
        const id = e.target.id
        const value = e.target.value
       
        setData({...data, [id] : value})
    }
  
    console.log(data)

  return (
  <div className="Due">
  <div className="DueContainer">
     <div className="top">
          <h1>{title}</h1>
        </div>
    
        <div className="formcontainer">
    <form className ="container"  onSubmit = {handleAdd}>
     <h1 style = {{color:"black", fontSize:"30px"}}>Monthly Dues</h1>
      <div className="dueInput">
      {inputs.map((input) => (
        <div className="dueInput" key={input.id}>
          <label style = {{marginBottom:"10px"}}>{input.label}</label>
          <input style = {{marginBottom:"10px"}} className = 'input'
            id={input.id}
            type={input.type}
            placeholder={input.placeholder}
            onChange = {handleInput}
          />
        </div>
      ))}
      <label style = {{marginBottom:"10px"}}>Status</label>
      <select name = "status" id = "status"  onChange = {handleInput}>
      <option value = "Pending">Pending</option>
      <option value = "Paid" >Paid</option>
    </select>
    <button  className = "duebutton" type="submit">
        Submit
    </button>
    </div>
    </form>
    </div>
    </div>
  </div>
  )
}

export default Newdues