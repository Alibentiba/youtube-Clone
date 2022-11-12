import { Box } from '@mui/material';
import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Feed from './components/Feed.jsx';
function App() {
  return (
  <BrowserRouter>
<Box sx={{background:'black'}}>

<Routes>
<Route exact path='/' element={<Feed/>}/>
</Routes>
</Box>
</BrowserRouter>
  
  
  )}

export default App
