import { Box } from '@mui/material';
import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import{ Feed,Navbar,ChannelDetail,SearchFeed} from './components';
function App() {
  return (
  <BrowserRouter>
<Box sx={{background:'black'}}>
<Navbar/>
<Routes>
<Route exact path='/' element={<Feed/>}/>
<Route path='/channel/:id' element={<ChannelDetail/>} />
<Route path='/SearchFeed/:SearchTerm' element={<SearchFeed/>} />

</Routes>
</Box>
</BrowserRouter>
  

  )}

export default App
