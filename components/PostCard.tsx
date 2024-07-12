import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from 'next/link';

const PostCard = ({id, title, body}: {id:number,title:string, body:string }) => {
  return (
    <Grid item xs={12} md={6} sx={{ border:"1px solid #000", paddingY:"10px" }}>
      <Box sx={{display:"flex", marginBottom:2, alignItems:"center"}}>
      <Typography variant='h2' sx={{ fontSize:"25px", fontWeight:700}}>Title:</Typography>
      <Typography variant='h2' sx={{ fontSize:"25px", fontWeight:500}}>{title}</Typography>
      </Box>
      <Box sx={{display:"flex", marginBottom:2}}>
      <Typography variant='h2' sx={{ fontSize:"25px", fontWeight:700}}>Body:</Typography>
      <Typography variant='h2' sx={{ fontSize:"25px", fontWeight:500}}>{body}.</Typography>
      </Box>

      {/* <Typography variant='h3' sx={{ fontSize:"18px", fontWeight:400, marginBottom:2 }}>Body: {body}</Typography> */}
      <Box sx={{display:"flex", marginBottom:2, marginRight:2, justifyContent:"end"}}>
      <Link className='user-card-link' href={`posts/${id}`}>Show Details</Link>

      </Box>
      </Grid>
  )
}

export default PostCard