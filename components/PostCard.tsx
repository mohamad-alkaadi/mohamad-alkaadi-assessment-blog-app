import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from 'next/link';

const PostCard = ({id, title, body}: {id:number,title:string, body:string }) => {
  return (
    <Grid item xs={12} md={6} xl={3} sx={{boxShadow: 2, padding:3 }}>
      <Typography variant='h2' sx={{ fontSize:"28px", fontWeight:700,marginBottom:1}}>Title:</Typography>
      <Typography variant='h2' sx={{ fontSize:"25px", fontWeight:400, marginBottom:2, marginLeft:1}}>{title}</Typography>
      <Typography variant='h2' sx={{ fontSize:"28px", fontWeight:700, marginBottom:1}}>Body:</Typography>
      <Typography variant='h2' sx={{ fontSize:"25px", fontWeight:400,marginBottom:2, marginLeft:1}}>{body}.</Typography>

      <Box sx={{display:"flex", marginRight:2, justifyContent:"end"}}>
      <Link className='user-card-link' href={`posts/${id}`}>Show Details</Link>

      </Box>
      </Grid>
  )
}

export default PostCard