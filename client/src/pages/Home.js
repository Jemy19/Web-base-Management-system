import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import "./Home.css";
import fireDb from '../firebase.js';
import { toast } from 'react-toastify';
import Header from "../components/Header"


const Home = () => {
    const [data, setData] = useState({});
    
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
    },[])

const onDelete = (id) => {
    if(window.confirm("Are you sure about that?")){
        fireDb.child(`dues/${id}`).remove((err) =>{
            if(err){
                toast.error(err)
            } else{
                toast.success("Deleted Successfully")
            }
        })
    }
}

  return (
    <div>
        <div style={{marginTop: "150px"}}>  
            <Header />      
            <table className='styled-table'>
                <thead>
                    <tr>
                       <th style={{textAlign: "center"}}>ID</th>
                       <th style={{textAlign: "center"}}>NAME</th>
                       <th style={{textAlign: "center"}}>DESCRIPTION</th>
                       <th style={{textAlign: "center"}}>AMOUNT</th>
                       <th style={{textAlign: "center"}}>STATUS</th>
                       <th style={{textAlign: "center"}}>ACTION</th>
                    </tr>
                </thead>
                <tbody>
                      {Object.keys(data).map((id, index) =>{
                            return (
                         <tr>      
                            <th scope = "row">{index + 1}</th>
                            <td>{data[id].name}</td>
                            <td>{data[id].description}</td>
                            <td>{data[id].amount}</td>
                            <td>{data[id].status}</td>
                            <td>
                                <Link to = {`/update/${id}`}><button className='btn btn-edit'>Edit</button></Link>
                                <button className='btn btn-delete' onClick={() => onDelete(id)}>Delete</button>
                                <Link to ={`/view/${id}`}><button className='btn btn-view'>View</button></Link>
                        </td>
                        </tr> 
                        )


                      })}  
                          
                </tbody>

            </table>

        </div>

    </div>
  )
}

export default Home