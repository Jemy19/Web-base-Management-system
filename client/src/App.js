import React, { useEffect } from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Auth from './components/Auth/Auth';
import { gapi } from 'gapi-script';
import Home from './components/Home/Home';


const App = () => {

  useEffect(() => {
    function start() {
      gapi.client.init({
        client_Id: "1025088328222-3797b887aes44mmruc3mpth2ggqfdcvo.apps.googleusercontent.com",
        scope:""
      })
    };

    gapi.load('client:auth2', start);
  });

  return (
    <BrowserRouter>
      <Container maxWidth="lg">
        <Routes>
          <Route path="/" exact element={<Auth />} />
          <Route path="/Home" exact element={<Home />} />        
        </Routes>
      </Container>
    </BrowserRouter>
  );
};

export default App;
