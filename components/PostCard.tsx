import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from 'next/link';

const PostCard = ({id, title, body}: {id:number,title:string, body:string }) => {
  return (
    <Grid item xs={12} md={6} sx={{ border:"1px solid #000", paddingY:"20px" }}>
      <Typography variant='h2' sx={{ fontSize:"25px", fontWeight:700, marginBottom:2 }}>Title: {title}</Typography>
      <Typography variant='h3' sx={{ fontSize:"18px", fontWeight:400, marginBottom:2 }}>Body: {body}</Typography>
      <Link className='user-card-link' href={`posts/${id}`}>Show Details</Link>
      </Grid>
  )
}

export default PostCard