import { DataGrid } from "@mui/x-data-grid";
import { transaction, dueRows } from "../../datatablesource"
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
import './transaction.css'

const Transaction = () => {
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
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "transaction", id));
      setData(data.filter((item) => item.id !== id));
    } catch (err) {
      console.log(err);
    }
  };
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];

  return (
    <>
    <div className="datatable">
      <div className="datatableTitle">
        Transaction List
        <Link to="/newtransaction" className="link" >
          Add New
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={transaction.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection 
        experimentalFeatures={{ newEditingApi: true }}
      />
    </div>
    </>
  );
};

export default Transaction;