import { Box, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import {fetchFromAPI} from '../utils/fetchFromAPI'
import ReactPlayer from "react-player";
import CheckCircle from '@mui/icons-material/CheckCircle';
import Videos from './Videos';
const VideoDetail = () => {
    const {Ali}=useParams()
const [videoDetails,setVideoDetail]=useState()
const [VideosList,setVideos]=useState()
useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${Ali}`)
      .then((data) => setVideoDetail(data.items[0]))

    fetchFromAPI(`search?part=snippet&relatedToVideoId=${Ali}&type=video`)
      .then((data) => setVideos(data.items))
  }, [Ali]);

if(!videoDetails?.snippet) return <p>Loader</p>;
console.log('the video videoDetail',videoDetails)
const { snippet: { title, channelId, channelTitle }, statistics: { viewCount, likeCount } } = videoDetails;
if(!VideosList) return <p>Loader</p>;
console.log('the videos list',VideosList)


  return (
    <Box  sx={{width:'100%',height:'auto',display:'flex',flexDirection:'row'}}>
    <Stack direction='column' sx={{width:'70%'}} gap='7px'>
    <ReactPlayer width= '100%'height= '70vh' 
    url={`https://www.youtube.com/watch?v=${Ali}`} className="react-player" controls />   
    <Typography  sx={{fontWeight:'bold',color:'#FFF'}}>{title.slice(0,60)}</Typography>
     <Stack direction='row' justifyContent='space-between' sx={{width: '100%'}}>
     <Typography sx={{fontSize:'14px',color:'gray'}}>{channelTitle}<CheckCircle sx={{fontSize:'12px',color:'gray'}}/></Typography>
     <Typography sx={{fontSize:'14px',color:'gray'}}><span style={{marginRight:'35px'}}>{viewCount} view</span> <span>{likeCount}likes</span></Typography>
     </Stack>


    </Stack>
    <Videos videos={VideosList}/>


    </Box>
  )
}

export default VideoDetail