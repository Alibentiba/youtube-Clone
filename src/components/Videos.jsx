import { Box, Stack } from '@mui/system'
import React from 'react'
import {VideoCard} from '../components'
const Videos = ({videos}) => {
  console.log('the list ',videos)
  return (
   <Stack direction='row' flexWrap='wrap' justifyContent='start' gap={2}>
{videos.map((item,index)=>{
return <Box key={index}>
{item.id.videoId&& <VideoCard vidio={item}/>}
{/* {item.id.ChannelId&& <ChannelCard ChannelDetaill={item}/>} */}
</Box>

})}


   </Stack>
  )}
export default Videos