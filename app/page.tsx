import { getPosts } from '@/api/posts';
import PostCard from '@/components/PostCard';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default async function Home() {
 const posts = await getPosts()
 
  return (
    <Box sx={{
    }}>
      <Typography sx={{fontSize:"50px", marginLeft:2}}>Posts List:</Typography>
     <Grid container columns={12}>
     {posts.map(post => (
      <PostCard id={post.id} title={post.title} body={post.body}/>
        ))}
     </Grid>
    </Box>
  );
}
