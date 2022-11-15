import { Box, Stack } from '@mui/system'
import React from 'react'
import {VideoCard} from '../components'
const Videos = ({videos}) => {
  console.log('the list ',videos)
  return (
   <Stack direction='row' flexWrap='wrap' justifyContent='center' gap={1} paddingTop='20px' >
{videos.map((item,index)=>{
return <Box key={index}>
{item.id.videoId&& <VideoCard vidio={item}/>}

</Box>

})}


   </Stack>
  )}
export default Videos