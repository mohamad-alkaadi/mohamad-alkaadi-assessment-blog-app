import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
const Comment = ({ email ,name, body}: {email:string, name:string, body:string }) => {
  return (
    <Box sx={{border:"1px solid #000", marginBottom:5}}>
    <Typography variant='h2' sx={{ fontSize:"20px", fontWeight:700, marginBottom:2 }}>Name: {name}</Typography>
    <Typography variant='h2' sx={{ fontSize:"18px", fontWeight:700, marginBottom:2 }}>Email:{email}</Typography>
    <Typography variant='h3' sx={{ fontSize:"16px", fontWeight:400, marginBottom:2 }}>Body:{body}</Typography>
</Box>
  )
}

export default Comment