import React, { useState } from 'react'
import { Paper,IconButton } from '@mui/material';
import {Search} from '@mui/icons-material' 
// import { AccessAlarm, ThreeDRotation } from '@mui/icons-material';
import {useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const [SearchTerm,setSearchTerm]=useState('')
  const navigate=useNavigate()
  const handelSubmit=(e)=>{

    e.preventDefault()
  navigate(`/SearchFeed/${SearchTerm}`)
  setSearchTerm('')
}
  return (
    <Paper type='form' onSubmit={handelSubmit} component='form'  sx={{flexDirection:'row',background:'#FFF',width:'36%',pr:0,pl:2,borderRadius:'30px',justifyContent:'space-between'}}>
        <input value={SearchTerm} onChange={(e)=>{setSearchTerm(e.target.value) }}
        placeholder='Search' type="text" className='search-bar' style={{width:'85%',border:'none',outline:'none'}}   />
        <IconButton type='submit' sx={{background:'#FFF'}} >
            <Search sx={{color:'red'}}/>
             </IconButton>

    </Paper>




  )
}

export default SearchBar