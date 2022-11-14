import { Stack } from '@mui/material'
import React from 'react'
import {categories} from '../utils/constants'
import "./Sidbar.css"
const Sidbar = ({selectedcategory,setselectedcategory}) => {

  return (
   <Stack sx={{flexDirection:'column',height:'95%',alignItems:'center',justifyContent:'center',gap:"5px"}}>
   {categories.map((item,index)=>{
   return(
    <button onClick={()=>setselectedcategory(item.name)} className='category-btn' style={{background:item.name===selectedcategory&&'#FC1503'}} key={index}  sx={{with:'90%'}}>
     <span style={{color:item.name===selectedcategory?'#FFF':'red'}}>{item.icon}</span>
    <span>{item.name}</span>
     </button>

)})}



   </Stack>
  )
}

export default Sidbar