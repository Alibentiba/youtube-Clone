import React, { useEffect, useState } from 'react'
import { Box, Stack, Typography } from '@mui/material'
import {Sidbar,Videos} from '../components'
import {fetchFromAPI} from '../utils/fetchFromAPI'
const Feed = () => {
  const [videosList,setVideos]=useState([])
  const [selectedcategory,setselectedcategory]=useState('New')
useEffect(()=>{
  
  fetchFromAPI(`search?part=snippet&q=${selectedcategory}`).then((data)=>{
    setVideos(data.items)}
    )

},[selectedcategory])



  return (
    <Stack sx={{flexDirection:'row',background:'black',height:'95vh'}}>

    <Box sx={{width:'15%',height:"100%",borderRight:'1px solid #FFF',mt:'16px'}}>
      <Sidbar selectedcategory={selectedcategory } setselectedcategory={setselectedcategory}/>
      <Typography sx={{width:"100%", textAlign:'center', color:'#FFF',fontSize:"12px",fontWeight:'300'}}>@Copyright 2022 Youtube-Clone</Typography>
     
    </Box >

      <Box sx={{display:'flex',height:'90vh',flexDirection:'column',justifyContent:'flex-start',alignItems:'center'}}>
      <Typography variant='h4' sx={{fontWeight:'bold',color:'#FFF',pl:'10px',pt:'10px'}}>
         New<span style={{color:'red'}}>Video</span>
       </Typography>
       <Stack>
        <Videos videos={videosList} />
       </Stack>
   </Box>
    </Stack>
  )
}

export default Feed