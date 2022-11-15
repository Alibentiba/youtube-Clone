import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from "../utils/constants";
const VideoCard = ({vidio:{id:{videoId},snippet}}) => {
  return (
    <Card>
<Link to={snippet?`"video/${videoId}"`:'video'}>
<CardMedia image={snippet?.thumbnails?.high.url} alt='hhh' sx={{width:390,height:180}} />

</Link>

<CardContent sx={{background:'#1e1e1e',height:106,width:358,}}>

   <Link to={videoId?`/video/${videoId}`:demoVideoUrl } style={{textDecoration:'none'}}>
    <Typography variant='subtitle1' sx={{fontWeight:'bold',color:'#FFF',}}>
      {snippet.title.slice(0,60)}
    </Typography></Link>


    <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}  style={{textDecoration:'none'}} >
    <Typography variant='subtitle2' sx={{color:'gray'}}>
      {snippet.title.slice(0,40)}<CheckCircleIcon sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
    </Typography>
    </Link>

</CardContent>




</Card>
  )
}

export default VideoCard