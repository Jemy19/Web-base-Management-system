import "./userlist.css"
import Navbar from "../../components/navbar/Navbar"
import Datatable from "../../components/datatable/Datatable"

const Userlist = () => {
  return (
    <>
    <div className="list">
      <div className="listContainer">
        <Datatable/>
      </div>
    </div>
    </>
  )
}

export default Userlist