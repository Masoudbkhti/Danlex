import {Box, Paper, Typography} from "@mui/material";
import {PRODUCTS} from "@/lib/data.ts";
import GuarantyComponent from "@/components/GuarantyComponent.tsx";
import {digitsEnToFa} from "@persian-tools/persian-tools";


export default function ProductSearchCart ({title, id}) {



    const productData = PRODUCTS.find((item)=> item.id === id);

    // @ts-ignore
    return (
        <Paper elevation={3} sx={{'&:hover': {boxShadow:"12"}, cursor:"pointer",p:"10px", display:"flex", alignItems:"center", justifyContent:"space-between"}}>
            <Box sx={{display:"flex", alignItems:"center", width:"80%"}}>
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
            </Box>
            {
                productData.garanty && (
                    <Box sx={{width:"20%", height:"100%",position:"relative"}}>
                        <Box sx={{position:"absolute", left:"0", top:"0"}}>
                            <GuarantyComponent />
                        </Box>

                    </Box>
                )
            }



        </Paper>
    )
}