'use client'
import { getPost } from '@/api/posts';
import { useParams } from 'next/navigation'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Post from '@/components/Post';
import { getPostComments } from '@/api/comments';
import Comment from '@/components/Comment';

export default async function page() {
  const params = useParams<{ id: string }>()
  const post = await getPost(params.id)
  const comments = await getPostComments(params.id)
 
  return (
    <Box sx={{border:"1px solid #000", padding:5}}>
      <Post title={post.title} body={post.body}/>
      <Typography variant='h1' sx={{ fontSize:"38px", fontWeight:700, marginBottom:2 }}>Comments</Typography>

{comments.map(comment => (
      <Comment email={comment.email}  body={comment.body} name={comment.name}/>
        ))}
    </Box>
  )
}
