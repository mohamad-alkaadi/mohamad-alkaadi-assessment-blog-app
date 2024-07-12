import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
const Comment = ({ email ,name, body}: {email:string, name:string, body:string }) => {
  return (
    <Box sx={{boxShadow: 3, marginBottom:5, padding:3}}>
      <Box sx={{display:"flex", marginBottom:2, alignItems:"center"}}>
      <Typography variant='h2' sx={{ fontSize:"25px", fontWeight:700}}>Name:</Typography>
      <Typography variant='h2' sx={{ fontSize:"25px", fontWeight:500}}>{name}</Typography>
      </Box>
      <Box sx={{display:"flex", marginBottom:2, alignItems:"center"}}>
      <Typography variant='h2' sx={{ fontSize:"25px", fontWeight:700}}>Email:</Typography>
      <Typography variant='h2' sx={{ fontSize:"25px", fontWeight:500}}>{email}</Typography>
      </Box>
      <Box sx={{display:"flex", marginBottom:2, alignItems:"start"}}>
      <Typography variant='h2' sx={{ fontSize:"25px", fontWeight:700}}>Body:</Typography>
      <Typography variant='h2' sx={{ fontSize:"25px", fontWeight:500}}>{body}</Typography>
      </Box>
</Box>
  )
}

export default Comment