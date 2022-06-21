import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css"
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";

function App() {
  return (
    <Router>
      <Topbar/>
      <div className="container">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} exact/>
          <Route path="/users" element={<UserList />} exact/>
          <Route path="/user/:userId" element={<User />} exact/>
          <Route path="/newUser" element={<NewUser />} exact/>
        </Routes>
      </div>
    </Router>

    );
  
}

export default App;
