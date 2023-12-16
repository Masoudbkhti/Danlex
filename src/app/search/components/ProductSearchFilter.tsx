import {Box, Typography} from "@mui/material";
import {searchResultType} from "@/lib/types.ts";
import {PRODUCTS} from "@/lib/data.ts";
import ProductCategoryFilter from "@/app/search/components/ProductCategoryFilter.tsx";


export default function ProductSearchFilter({searchResult}: { searchResult: Array<searchResultType> }){
    return(
        <>
            <Box sx={{display:"flex", flexDirection:"column", justifyContent:"flex-start"}}>
                <Typography variant="h4" component="p" sx={{paddingY:"65px", fontWeight:"bold"}}>دسته بندی</Typography>

                {
                    <ProductCategoryFilter data={searchResult} />
                }

            </Box>
        </>
    )
}