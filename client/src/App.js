import { useContext } from 'react';
import './App.css';
import Login from './pages/login/login';
import Home from './pages/Home/Home'
import Userlist from './pages/userList/Userlist'
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import {userInputs, duesInputs,transaction, recordInputs} from './formSource'
import New from './pages/new/new';
import { AuthContext } from './context/AuthContext';
import Sidebar from './components/sidebar/sidebar'
import Navbar from './components/navbar/Navbar'
import Manageuser from './pages/userList/manage'
import Newdues from './pages/MonthlyDues/Newdues'
import Listdue from './pages/userList/listdue'
import Invoice from './pages/Invoice/invoice'
import Calendar from './pages/events/calendar'
import Transactionlist from './pages/userList/transactionlist'
import Messages from './pages/messages/messages'
import Signup from './pages/singup/signup'
import Newtransaction from './pages/transaction/newtransaction'
import Record from './pages/Records/Record'
import Addrecord from './pages/Records/Addrecord'
function App() {
  
const {currentUser} = useContext(AuthContext)

const RequireAuth = ({children}) =>{
  return currentUser ? children : <Navigate to = "/login"/>
}

console.log(currentUser)

  return (

    <BrowserRouter>
      
          <Navbar />
          <div className='App'>
              <Sidebar />
          <Routes>
                <Route exact path = '/login' element = {<Login/>}/>
               <Route exact path = '/signup' element = {<Signup/>}/>
                <Route exact path = '/' element = {<RequireAuth><Home /></RequireAuth>}/>
                <Route exact path = 'userList' element ={<RequireAuth><Manageuser title=" Manage Users" /></RequireAuth>} />
                <Route exact path = 'newuser' element = {<RequireAuth><New inputs={userInputs} title="Add New User" /></RequireAuth>}/>
                <Route exact path = 'manageusers' element =  {<RequireAuth><Userlist /></RequireAuth>}/>
                <Route exact path = '/newdues' element = {<RequireAuth><Newdues inputs={duesInputs} title="Add New Monthly Due"/></RequireAuth>}/>
                <Route exact path = '/newtransaction' element = {<RequireAuth><Newtransaction inputs={transaction} title="Add New Transaction"/></RequireAuth>}/>
               <Route exact path = '/duelist' element = {<RequireAuth><Listdue/></RequireAuth>}/>
                <Route exact path = '/invoice' element = {<RequireAuth><Invoice title="Create New Invoice"/></RequireAuth>}/>
                <Route exact path = '/calendar' element = {<RequireAuth><Calendar title="Calendar of Events"/></RequireAuth>}/>
                <Route exact path = '/transaction' element = {<RequireAuth><Transactionlist title="Transaction Records"/></RequireAuth>}/>
                <Route exact path = '/messages' element = {<RequireAuth><Messages/></RequireAuth>}/>
                <Route exact path = '/reports' element = {<RequireAuth><Record title="Reports"/></RequireAuth>}/>
                <Route exact path = '/reports/addreports' element = {<RequireAuth><Addrecord inputs={recordInputs} title="Generate Reports"/></RequireAuth>}/>
      </Routes>
      </div>
  
    </BrowserRouter>
  )
}

export default App;
