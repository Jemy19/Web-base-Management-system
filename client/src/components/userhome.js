
import { DataGrid } from "@mui/x-data-grid";
import { peopleColumns, userRows } from "../datatablesource";
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

function Userhome() {
    const [data, setData] = useState([]);
    useEffect(() => {
      // LISTEN (REALTIME)
      const unsub = onSnapshot(
        collection(db, "users"),
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
      <div style={{marginLeft:"500px"}}className="datatableTitle">
        <Link style={{textDecoration:"none", border:"none",marginleft:"500px"}} to="/newuser" className="link" >
          View All Users
        </Link>
      </div>
      <DataGrid
        style={{width:"600px",height:"350px"}}
        className="datagrid"
        rows={data}
        columns={peopleColumns}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />
    </div>
    </>
    )
}

export default Userhome