import { Box } from '@mui/material';
import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import{ Feed,Navbar,ChannelDetail,SearchFeed,VideoDetail} from './components';
function App() {
  return (
  <BrowserRouter>
<Box sx={{background:'black'}}>
<Navbar/>
<Routes>
<Route exact path='/' element={<Feed/>}/>
<Route path='/channel/:id' element={<ChannelDetail/>} />
<Route path='/SearchFeed/:SearchTerm' element={<SearchFeed/>} />
<Route path='/video/:Ali' element={<VideoDetail/>} />

</Routes>
</Box>
</BrowserRouter>
  

  )}

export default App
