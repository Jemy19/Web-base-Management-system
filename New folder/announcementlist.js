import { DataGrid } from "@mui/x-data-grid";
import { newsColumns } from "../../datatablesource";
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
import './list.css'

const Announcementlist = () => {
  const [data, setData] = useState([]);

  useEffect(() => {

    const unsub = onSnapshot(
      collection(db, "announcement"),
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

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "announcement", id));
      setData(data.filter((items) => items.id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  
  return (
    <>
    <br/>
    <br/>
<br/>
    <br/>
<br/>
<br/>
<br/>
<h2 style={{marginLeft: "20px"}}>Announcement List</h2>
<br/>
     <div>
     <div style = {{width:'60%',textAlign:"left",marginLeft:"20px"}}>
        {
            data.map((items)=>(
                <div style ={{display:""}} className = "newscard">
                      <h1 style ={{marginBottom:"10px", color:"black",fontWeight:"bold"}}>{items.title} <span style ={{fontSize:"10px",color:"lightgray"}}>({items.date})</span></h1>
                      <p style ={{marginLeft:"20px",marginBottom:"10px",fontSize:"20px",color:"lightgray"}}>{items.body}</p>
                      
                </div>            
            ))
        }
        </div>
        </div>
      
    </>
  );
};
  export default Announcementlist