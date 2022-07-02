import React,{ useState, useEffect} from 'react'
import "./sidebar.css"
import { LineStyle, Timeline, TrendingUp, PermIdentity,
AttachMoney, BarChart, MailOutline, DynamicFeed,
ChatBubbleOutline, WorkOutline, Report } from "@material-ui/icons"
import { Link,useLocation } from "react-router-dom";

function Sidebar() {
  const [activeTab, setActiveTab] = useState("Home");
  const location = useLocation();

    useEffect(()=>{
        if(location.pathname ==="/"){
            setActiveTab("Home")
        }
        else if(location.pathname === "/userlist"){
            setActiveTab("userlist")
        }
        else if(location.pathname === "/manageusers"){
            setActiveTab("manageuser")
        }
        else if(location.pathname === "/newuser"){
            setActiveTab("newuser")
        }
        else if(location.pathname === "/transaction"){
            setActiveTab("transaction")
        }
        else if(location.pathname === "/duelist"){
            setActiveTab("duelist")
        }
        else if(location.pathname === "/newdues"){
            setActiveTab("newdues")
        }
        else if(location.pathname === "/invoice"){
            setActiveTab("invoice")
        }
        else if(location.pathname === "/messages"){
            setActiveTab("messages")
        }
        else if(location.pathname === "/calendar"){
            setActiveTab("calendar")
        }
        else if(location.pathname === "/"){
            setActiveTab("About")
        }
    }, [location])

  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" style={{textDecoration:"none"}}>
            <li className = {`${activeTab === "Home" ? "active" : ""} sidebarListItem`} onClick = {() => setActiveTab("Home")}>
              Home 
            </li>
            </Link>

          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">People</h3>
          <ul className="sidebarList">
            <Link to="/userlist" style={{textDecoration:"none"}} >
              <li className = {`${activeTab === "userlist" ? "active" : ""} sidebarListItem`} onClick = {() => setActiveTab("userlist")}>
                <PermIdentity className="sidebarIcon" />
                Users
              </li>
            </Link>
            <Link to ="/manageusers" style={{textDecoration:"none"}}>
            <li className = {`${activeTab === "manageuser" ? "active" : ""} sidebarListItem`} onClick = {() => setActiveTab("manageuser")}>
              <PermIdentity className="sidebarIcon" />
              Manage Users
            </li>
            </Link>
            <Link to = "/newuser" style={{textDecoration:"none"}}>
            <li className = {`${activeTab === "newuser" ? "active" : ""} sidebarListItem`} onClick = {() => setActiveTab("newuser")}>
              <PermIdentity className="sidebarIcon" />
              Add Users
            </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Transactions</h3>
          <ul className="sidebarList">
            <li className = {`${activeTab === "transaction" ? "active" : ""} sidebarListItem`} onClick = {() => setActiveTab("transaction")}>
               <Link to ="/transaction" style={{textDecoration:"none"}}>
              <WorkOutline className="sidebarIcon" />
              Transactions
              </Link>
            </li>
            <li className = {`${activeTab === "duelist" ? "active" : ""} sidebarListItem`} onClick = {() => setActiveTab("duelist")}>
            <Link to ="/duelist" style={{textDecoration:"none"}}>
              <DynamicFeed className="sidebarIcon" />
              Monthly Dues
              </Link>
            </li>
            <li className = {`${activeTab === "newdues" ? "active" : ""} sidebarListItem`} onClick = {() => setActiveTab("newdues")}>
            <Link to ="/newdues" style={{textDecoration:"none"}}>
              <ChatBubbleOutline className="sidebarIcon" />
              Add Monthly Dues
              </Link>
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <li className = {`${activeTab === "invoice" ? "active" : ""} sidebarListItem`} onClick = {() => setActiveTab("invoice")}>
            <Link to ="/invoice" style={{textDecoration:"none"}}>
              <MailOutline className="sidebarIcon" />
              Invoice
            </Link>
            </li>
            <li className = {`${activeTab === "messages" ? "active" : ""} sidebarListItem`} onClick = {() => setActiveTab("messages")}>
            <Link to ="/messages" style={{textDecoration:"none"}}>
              <Timeline className="sidebarIcon" />
              Messages
              </Link>
            </li>
            <li className="sidebarListItem">
            <Link to ="/record" style={{textDecoration:"none"}}>
              <Report className="sidebarIcon" />
              Reports
            </Link>
            </li>
            <li className = {`${activeTab === "calendar" ? "active" : ""} sidebarListItem`} onClick = {() => setActiveTab("calendar")}>
            <Link to ="/calendar" style={{textDecoration:"none"}}>
              <Timeline className="sidebarIcon" />
              Events
            </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar