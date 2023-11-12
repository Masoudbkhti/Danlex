import {Box, Paper, Typography} from "@mui/material";
import {PRODUCTS} from "@/lib/data.ts";



export default function ProductSearchCart ({title, id}) {



    const productData = PRODUCTS.find((item)=> item.id === id)

    return (
        <Paper elevation={3} sx={{'&:hover': {boxShadow:"12"}, cursor:"pointer",p:"10px", display:"flex", alignItems:"center"}}>
            <Box>
                <img style={{width:"200px"}} src={productData.image} alt={title} />
            </Box>
            <Box sx={{display:"flex", flexDirection:"column"}}>
                <Typography variant="h6" component="p">
                    {title}
                </Typography>
                <Box sx={{marginTop:"20px"}}>
                    {Object.entries(productData.specifics).map(([key, value]) => (
                        <Typography variant="body1" component="p" key={key}>
                            {`${value}: ${productData[key]}`}
                        </Typography>
                    ))}
                </Box>
            </Box>

        </Paper>
    )
}