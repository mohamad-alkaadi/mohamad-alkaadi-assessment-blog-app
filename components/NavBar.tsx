import Link from 'next/link'
import React from 'react'
import Box from '@mui/material/Box';

const NavBar = () => {
  return (
    <Box sx={{marginBottom:10, marginLeft:2}}>
        <Link className='nav-link' href={"/"}> My Blog</Link>
    </Box>
  )
}

export default NavBar