import "./userlist.css"
import Navbar from "../../components/navbar/Navbar"
import Duelist from "../MonthlyDues/duelist"

const Listdue = () => {
  return (
    <>
    <div className="list">
      <div className="listContainer">
        <Duelist/>
      </div>
    </div>
    </>
  )
}

export default Listdue