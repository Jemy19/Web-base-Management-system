import React, { useEffect, useState} from 'react'
import {useNavigate, useLocation, useParams, Link} from 'react-router-dom'
import './addEdit.css';
import fireDb from '../firebase.js';
import { toast } from 'react-toastify';

const initialState = {
    name: "",
    description: "",
    amount: "",
    status: "",
  
  }
  
const Addedit = () => {

        const [state, setState] = useState(initialState);
        const { name, description, amount, status } = state;
        const [data, setData] = useState({});

        const navigate = useNavigate();

        const handleSubmit = (e) =>{
            e.preventDefault();
            
            if(!name || !description || !amount || !status){
              toast.error("Please Input Value Into Each Input")
            }else{
            if(!id){fireDb.child("dues").push(state, (err) =>{
                if(err){
                    toast.error(err)
                }
                else{
                    toast.success("Added Successfully")
                }
            })}else{
                fireDb.child(`dues/${id}`).set(state, (err) =>{
                    if(err){
                        toast.error(err)
                    }
                    else{
                        toast.success("Updated Successfully")
                    }
                })}
            setTimeout(() => navigate("/"), 500)
            }

          }

        const handleInputChange = (e) => {
            let { name, value } = e.target;
            setState({...state, [name]: value})
         }

        
        const {id} = useParams();

         useEffect(()=>{
            fireDb.child('dues').on('value',(snapshot) => {
                if(snapshot.val() !== null){
                    setData({...snapshot.val()})
                }else{
                    setData({})
                }
            })  
            return () =>{
                setData({});
            }
        },[id])

        useEffect(() =>{
            if(id){
                setState({...data[id]})
            }
            else{
                setState({...initialState})
            }
            return () => {
                setState({...initialState})
            }

        },[id, data])

  return (
    <div style ={{marginTop:"150px"}}>
      <form className = "form" style = {{margin:"auto", padding:"15px", maxWidth:"400px", alignContent:"center"}} onSubmit={handleSubmit}> 
        <h1>Monthly Due</h1>
          <input type='text' id='name' name="name" placeholder='Name' onChange={handleInputChange} value = {name || ""}/>
          <input type='text' id='description' name="description" placeholder='Description' onChange={handleInputChange} value = {description || ""} />
          <input type='number' id='amount' name="amount" placeholder='Amount' onChange={handleInputChange} value = {amount || ""}/>
          <select name = "status" onChange={handleInputChange}>
            <option value = "Pending">Pending</option>
            <option value = "Paid" >Paid</option>
          </select>
        <input className = "submit" value={id ? "Update": "Submit"} type="submit"/>
        <Link to = "/">
        <input className = "back" type="submit" value = "Back"/>
        </Link>
      </form> 


    </div>
  )
}

export default Addedit