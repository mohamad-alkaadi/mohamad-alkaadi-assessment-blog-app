import { getPosts } from '@/api/posts';
import PostCard from '@/components/PostCard';
import Grid from '@mui/material/Grid';

export default async function Home() {
 const posts = await getPosts()
 
  return (
    <main >
     <Grid container spacing={2} columns={12}>
     {posts.map(post => (
      <PostCard id={post.id} title={post.title} body={post.body}/>
        ))}
     </Grid>
    </main>
  );
}
