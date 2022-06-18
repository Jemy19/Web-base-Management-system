import React, { useEffect, useState} from 'react'
import {useNavigate, Link , useParams} from 'react-router-dom'
import './view.css';
import fireDb from '../firebase.js';

const View = () => {
    const [user, setUser] = useState({})
    const { id } = useParams();

    useEffect(()=>{
        fireDb.child(`dues/${id}`).get().then((snapshot) => {
            if (snapshot.exists()){
                setUser({...snapshot.val()})
            }else{
                setUser({})
            }
        })
    },[id])

  return (
    <div style = {{marginTop: "150px"}}>
        <div className='card'>
            <div className='card-header'>
                <h2>User Monthly Dues Details</h2>
            </div>
            <div className='container'>
                <strong>ID: </strong>
                <span>{id}</span>
                    <br/>
                    <br/>
                <strong>NAME: </strong>
                <span>{user.name}</span>
                    <br/>
                    <br/>
                <strong>DESCRIPTION: </strong>
                <span>{user.description}</span>
                    <br/>
                    <br/>
                <strong>AMOUNT: </strong>
                <span>{user.amount}</span>
                    <br/>
                    <br/>
                <strong>STATUS: </strong>
                <span>{user.status}</span>
                    <br/>
                    <br/>
                <Link to = "/">
                    <button>Go Back</button>
                </Link>
            </div>

        </div>  
    </div>
  )
}


export default View