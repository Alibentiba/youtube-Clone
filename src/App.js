import { Box } from '@mui/material';
import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import{ Feed,Navbar} from './components';
function App() {
  return (
  <BrowserRouter>
<Box sx={{background:'black'}}>
<Navbar/>
<Routes>
<Route exact path='/' element={<Feed/>}/>
</Routes>
</Box>
</BrowserRouter>
  
  
  )}

export default App
