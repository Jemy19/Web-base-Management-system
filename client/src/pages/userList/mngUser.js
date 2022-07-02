import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../datatablesource";
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
import './mnguser.css'

const Manage = () => {
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
  }, []);



  return (
    <div className = "container">
    <div className="datatable">
      <div className="datatableTitle">
      Members List
        <Link to="/manageusers" className="link" style = {{marginLeft:"600px",marginRight:"5px"}}>
          Manage
        </Link>       
        <Link to="/newuser" className="link">
          Add New
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={userColumns}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection 
      />
    </div>
    </div>
  );
};

export default Manage;