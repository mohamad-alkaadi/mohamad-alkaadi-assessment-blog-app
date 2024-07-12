import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Post = ({ title, body}: {title:string, body:string }) => {
    
  return (
    <Box>
        <Typography variant='h1' sx={{ fontSize:"38px", fontWeight:700, marginBottom:2 }}>Post</Typography>
        <Typography variant='h2' sx={{ fontSize:"25px", fontWeight:700, marginBottom:2 }}>Title: {title}</Typography>
        <Typography variant='h3' sx={{ fontSize:"18px", fontWeight:400, marginBottom:2 }}>Body: {body}</Typography>
    </Box>
  )
}

export default Post