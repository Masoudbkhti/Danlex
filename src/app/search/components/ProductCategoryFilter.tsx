import {Box, Typography} from "@mui/material";
import {PRODUCTS} from "@/lib/data.ts";
import {digitsEnToFa} from "@persian-tools/persian-tools";

export default function ProductCategoryFilter({data}){
    const productId = data.map((item)=>item.id);
    const productData = productId.map((id) => PRODUCTS.find((item)=> item.id === id))
    const productCategory = productData.map((product) => product.category);


// جدا سازی محصولات بر اساس نام آنها
    const separatedProducts = productCategory.reduce((acc, product) => {
        if (acc[product]) {
            acc[product].push(product);
        } else {
            acc[product] = [product];
        }
        return acc;
    }, {});
    console.log(Object.entries(separatedProducts))

    return (
        <>
            <Box>

                    {
                        Object.entries(separatedProducts).map((item) =>
                            (

                                <Typography variant="h7" component="p" sx={{marginBottom:"20px"}}>
                                    {item[0]} ({digitsEnToFa(item[1].length)})
                                </Typography>
                            )
                        )
                    }

            </Box>
        </>
    )
}