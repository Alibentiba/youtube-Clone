import { Box, Stack } from '@mui/system'
import React from 'react'
import {VideoCard,Loader} from '../components'
const Videos = ({videos,Direction}) => {
   
if(!videos?.length) return <Loader/>;
  return (
   <Stack direction={Direction||"row"} flexWrap='wrap' justifyContent='center' gap={1} paddingTop='20px' >
{videos.map((item,index)=>{
return <Box key={index}>
{item.id.videoId&& <VideoCard vidio={item}/>}

</Box>

})}


   </Stack>
  )}
export default Videos