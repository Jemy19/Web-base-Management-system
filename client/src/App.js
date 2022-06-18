import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import {Container} from '@material-ui/core'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/Home';
import Addedit from './pages/Addedit';
import View from './pages/View';
import Header from './components/Header';


function App(){

  return (
    <BrowserRouter>
    <Container>
      <div className='App'>
          <ToastContainer position = 'top-center'/>
          <Routes>
              <Route exact path = '/' element = {<Home />}/>
              <Route exact path = '/add' element = {<Addedit/>}/>
              <Route exact path = '/update/:id' element = {<Addedit/>}/>
              <Route exact path = '/view/:id' element = {<View/>}/>
          </Routes>
      </div> 
    </Container>
    </BrowserRouter>
  );
}

export default App;