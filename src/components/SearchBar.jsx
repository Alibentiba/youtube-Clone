import React from 'react'
import { Paper,IconButton } from '@mui/material';
import {Search} from '@mui/icons-material' 
// import { AccessAlarm, ThreeDRotation } from '@mui/icons-material';


const SearchBar = () => {
  return (
    <Paper  component='form'  sx={{background:'#FFF',width:'35%',pl:2,borderRadius:'30px',justifyContent:'space-between'}}>
        <input placeholder='Search' type="text" className='search-bar' style={{width:'90%',border:'none',outline:'none'}}   />
        <IconButton type='submit' sx={{background:'#FFF'}} >
            <Search sx={{color:'red'}}/>
             </IconButton>

    </Paper>




  )
}

export default SearchBar