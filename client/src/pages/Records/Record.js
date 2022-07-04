import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  deleteDoc,
  doc,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../../firebase";
import './record.css'

const Record = ({title}) => {
  const [data, setData] = useState([]);

  useEffect(() => {

    // LISTEN (REALTIME)
    const unsub = onSnapshot(
      collection(db, "reports"),
      (snapShot) => {
        let list = [];
        snapShot.docs.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
        setData(list);
      },
      (error) => {
        console.log(error);
      }
    );

    return () => {
      unsub();
    };
  }, []);


    return (
      <div className="new">
      <div className="newContainer">
         <div style={{justifyContent:"space-between", height:"60px"}}className="top">
          <h1>{title}</h1>
          <Link style={{padding:"10px", color:"green", border:"1px solid green"}} to="addreports">Add New Report</Link>
        </div>
        <div className = "record">
        {
            data.map((items, id)=>(
                <div style ={{display:""}}className = "recordcard">
                    <img className= 'recordimg' src = {items.img}/>
                    <p style ={{marginLeft:"10px", marginBottom:"10px",marginTop:"10px"}}><span style ={{fontWeight:'500'}}>TYPE:</span> &ensp; {items.status}</p>
                    <p style ={{marginLeft:"10px",marginBottom:"10px"}}><span style ={{fontWeight:'500'}}>DATE:</span> &ensp;   {items.date}</p>
                    <p style ={{marginLeft:"10px",marginBottom:"10px"}}><span style ={{fontWeight:'500'}}>LOCATION:</span>  &ensp;  {items.location}</p>
                    <label style ={{marginLeft:"10px",marginBottom:"10px", fontWeight:'500'}}>DESCRIPTION: </label>
                    <p style ={{border:"1px solid gray", padding: "10px", borderRadius:"10px",backgroundColor:"lightblue"}}>{items.description}</p>              
                </div>
            ))
        }
        </div>
        </div>
      </div>
    );
}

export default Record