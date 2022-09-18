import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Home from './pages/Home'
import New from './pages/New';

function App() {
  const theme = {
    primary: '#322353',
    second: '#6C63FF',
    background: '#F0F0F5',
    text: '#6C6C80',
    white: '#fff',
  };

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/new' element={<New/>}/>


    

        </Routes>
        <ToastContainer/>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
