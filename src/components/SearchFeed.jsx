import { useParams } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import { Box, Stack, Typography } from '@mui/material'
import {Videos} from '../components'
import {fetchFromAPI} from '../utils/fetchFromAPI'

const SearchFeed = () => {
    const {SearchTerm}=useParams()
    const [videos,setVideos]=useState([])
    useEffect(()=>{
        fetchFromAPI(`search?part=snippet&q=${SearchTerm}`).then((data)=>{
          setVideos(data.items)}
          )
      
      },[SearchTerm])
  return (
    <Box sx={{display:'flex',height:'auto',flexDirection:'column',width:"100%",justifyContent:'flex-start',alignItems:'flex-start'}}>
    <Typography variant='h4' sx={{fontWeight:'bold',color:'#FFF',pl:'10px',pt:'10px',width:'100%',
    textAlign: 'center', textAlign:'center'}}>
  Search Results for:<span style={{color:'red'}}>{SearchTerm}</span> Videos
     </Typography>
     <Stack>
      <Videos videos={videos} />
     </Stack>
 </Box>
  )
}

export default SearchFeed