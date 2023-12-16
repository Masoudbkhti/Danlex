import {Box, Typography} from "@mui/material";
import StarsIcon from '@mui/icons-material/Stars';
export default function GuarantyComponent () {
    return(
        <Box sx={{backgroundColor:"#F4F5FF", p:"5px", borderRadius:"10px", display:"flex", justifyContent:"center", alignItems:"center", gap:'10px'}}>
            <StarsIcon sx={{color:"#465ADA"}}/>

            <Typography sx={{color:"#4756D9"}}>گارانتی 15 ماهه</Typography>
        </Box>
    )
}