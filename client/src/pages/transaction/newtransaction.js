import React,{useState, useEffect} from 'react'
import './newtransaction.css'
import { setDoc, doc, collection, addDoc, Timestamp, serverTimestamp } from "firebase/firestore";
import {auth, db, storage} from '../../firebase'
import Chart from '../../components/charts/Chart'
import { userData } from "../../dummydata.js";
import { v4 as uuid } from 'uuid';

function Newdues({inputs, title}) {

    const [data,setData] = useState({})
    const transactionid = uuid();


    const handleAdd = async (e) => {
    
        e.preventDefault();

          await setDoc(doc(db, "transaction", transactionid), {
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
  <div className="transaction">
  <div className="transactionContainer">
     <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="transactioncontainer">
    <form className ="transactionform"  onSubmit = {handleAdd}>
    <h1 style = {{color:"black", fontSize:"30px"}}>New Transaction</h1>
      <div className="container">
      {inputs.map((input) => (
        <div className="transactionInput" key={input.id}>
          <label>{input.label}</label>
          <input className = 'input'
            id={input.id}
            type={input.type}
            placeholder={input.placeholder}
            onChange = {handleInput}
          />
        </div>
      ))}
    <label style = {{marginRight:"210px", marginBottom:"-15px"}}>Type</label>
      <select name = "status" id = "status"  onChange = {handleInput}>
      <option value = "Expense">Expense</option>
      <option value = "Income" >Income</option>
      <option value = "Investment">Investment</option>
    </select>
    <button className = "transactionbutton"type="submit">
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