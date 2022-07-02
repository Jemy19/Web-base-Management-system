import "./userlist.css"
import Navbar from "../../components/navbar/Navbar"
import Transaction from "../transaction/transaction"
import Chart from '../../components/charts/Chart'
import {transactionData} from '../../dummydata'

const Transactionlist = ({title}) => {
  return (
    <>
    
    <div className="list">
      <div className="listContainer">
      <div className="top">
          <h1>{title}</h1>
        </div>
      <Chart data={ transactionData } title="Transaction Analytics" grid dataKey="Expense" dataKey2="Income" dataKey3 = "Investment"/>
        <Transaction/>      
      </div>
    </div>
    </>
  )
}

export default Transactionlist