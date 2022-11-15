
import { Card, CardContent,Box, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from "../utils/constants";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { useParams } from "react-router-dom";
import Videos from '../components/Videos'
const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const fetchResults = async () => {
      const data = await fetchFromAPI(`channels?part=snippet&id=${id}`);

      setChannelDetail(data?.items[0]);

      const videosData = await fetchFromAPI(`search?channelId=${id}&part=snippet%2Cid&order=date`);

      setVideos(videosData?.items);
    };

    fetchResults();
  }, [id]);
  console.log('channelDetail',channelDetail)
  return (
    <Box>
   <Stack sx={{display:'flex',flexDirection:'column',alignContent:"center",justifyContent:'center'}}>
    <div style={{width:'100%',height:"30vh",background:'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(184,110,221,1) 100%)'}}>

    </div>
    <CardContent  sx={{
      display:'flex',
      flexDirection:'column',
      alignItems:'center',
      justifyContent:'center',
      width: '40vw',
    marginLeft: '28%',
    marginTop:' -5%'}} >
     <img src={channelDetail?.snippet?.thumbnails?.high?.url}alt="ff" 
       style={{
      width: '150px',
      height: '150px',
      borderRadius:'50%',
     }} />
     <Typography variant='subtitle1' sx={{color:'#FFF'}}>
      {channelDetail?.snippet?.title.slice(0,40)}<CheckCircleIcon sx={{ fontSize: "16px", color: "gray", ml: "5px" }} /></Typography>
      <Typography variant='subtitle2' sx={{color:'gray'}}>{channelDetail?.statistics?.subscriberCount?.slice(0,40)} abonnés</Typography>
     </CardContent>
   </Stack>


  <Videos videos={videos}/>


    </Box>
  )
}

export default ChannelDetail