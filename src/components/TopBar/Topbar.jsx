import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Avatar } from "@mui/material"
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import LogoutIcon from '@mui/icons-material/Logout';
import "./topbar.css"


function Topbar() {
  return (
   
    <Navbar  bg="light" variant="primary">
        <Container>
        <Navbar.Brand href="#home">Harmony Hills</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#message">Message</Nav.Link>
            <Nav.Link href="#home">Transaction</Nav.Link>
            <Nav.Link href="#reports">Reports</Nav.Link>
          </Nav>
        </Container>
        <div className="topRight">
        <div className="nicon">
      <NotificationsActiveIcon color="primary" />
      </div>
        <div className="avatar">
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
         </div>
            <LogoutIcon color="primary"/>
        </div> 
        </Navbar>
  );
}

export default Topbar
