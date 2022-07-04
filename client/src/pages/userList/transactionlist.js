import "./userlist.css"
import Navbar from "../../components/navbar/Navbar"
import Transaction from "../transaction/transaction"
import Chart from '../../components/charts/Chart'
import {transactionData} from '../../dummydata'
import { db } from "../../firebase";
import {
  collection,
  getDocs,
  deleteDoc,
  doc,
  onSnapshot,
  query,
  where
} from "firebase/firestore";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Transactionlist = ({title}) => {
   const [data,setData] = useState([])

  useEffect(
    () =>
      onSnapshot(
        collection(query(db, "transactions"),
        where("status", "==", "Expense")
        ),
        (snapshot) =>
          setData(
            snapshot.docs.map((doc) => ({
              ...doc.data(),
              id: doc.id,
            }))
          ),
          console.log(data)
      ),
    []
  );
  return (
    <>
    
    <div className="list">
      <div className="listContainer">
      <div className="top">
          <h1>{title}</h1>
        </div>
        <Transaction/>      
      </div>
    </div>
    </>
  )
}

export default Transactionlist