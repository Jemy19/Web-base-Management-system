import React from 'react'
import { DataGrid } from "@mui/x-data-grid";
import { transactionColumns, userRows } from "../datatablesource";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  deleteDoc,
  doc,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../firebase";

function Transactionhome() {

    const [data, setData] = useState([]);
    useEffect(() => {
      // LISTEN (REALTIME)
      const unsub = onSnapshot(
        collection(db, "transaction"),
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
    }, [])

    return(
        <>
    <div className="datatable">
      <div style={{marginLeft:"650px"}}className="datatableTitle">
        <Link style={{textDecoration:"none", border:"none"}}to="/newuser" className="link" >
          View All Transaction
        </Link>
      </div>
      <DataGrid
        style={{width:"800px",height:"350px"}}
        className="datagrid"
        rows={data}
        columns={transactionColumns}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />
    </div>
    </>
    )
}

export default Transactionhome