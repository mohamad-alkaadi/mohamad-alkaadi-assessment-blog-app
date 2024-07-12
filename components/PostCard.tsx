import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from 'next/link';

const PostCard = ({id, title, body}: {id:number,title:string, body:string }) => {
  return (
    <Grid item xs={12} md={6} xl={3} sx={{ border:"1px solid #000", padding:3 }}>
      <Box sx={{display:"flex", marginBottom:2, alignItems:"center"}}>
      <Typography variant='h2' sx={{ fontSize:"25px", fontWeight:700, marginRight:"5px"}}>Title:</Typography>
      <Typography variant='h2' sx={{ fontSize:"25px", fontWeight:500}}>{title}</Typography>
      </Box>
      <Box sx={{display:"flex", marginBottom:2}}>
      <Typography variant='h2' sx={{ fontSize:"25px", fontWeight:700,  marginRight:"5px"}}>Body:</Typography>
      <Typography variant='h2' sx={{ fontSize:"25px", fontWeight:500}}>{body}.</Typography>
      </Box>

      <Box sx={{display:"flex", marginRight:2, justifyContent:"end"}}>
      <Link className='user-card-link' href={`posts/${id}`}>Show Details</Link>

      </Box>
      </Grid>
  )
}

export default PostCard