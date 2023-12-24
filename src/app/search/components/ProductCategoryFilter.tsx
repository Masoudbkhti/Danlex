import {Box, Checkbox, Typography} from "@mui/material";
import {PRODUCTS} from "@/lib/data.ts";
import {digitsEnToFa} from "@persian-tools/persian-tools";
import {useEffect, useState} from "react";
import {SearchItems} from '@/utils/SearchItems.ts'
import {useRouter} from "next/navigation";
import {addToSearch, filterCategory, removeFilterProduct} from "@/redux/features/SearchSlice.ts";
import {useDispatch, useSelector} from "react-redux";
export default function ProductCategoryFilter({data}){
    const productCategory = data.map((product) => product.category);
    const router = useRouter();

// جدا سازی محصولات بر اساس نام آنها
    const separatedProducts = data.reduce((acc, product) => {
        if (acc[product.category]) {
            acc[product.category].push(product.id);
        } else {
            acc[product.category] = [product.id];
        }
        return acc;
    }, {});

    const [checked, setChecked] = useState(true);
    const dispatch = useDispatch();
    const {searchItems} = useSelector((store) => store.Search);

    const searchResult = searchItems.filter((item) => {
        digitsEnToFa(item.title.toLocaleLowerCase()) === separatedProducts
    })


    const handleChange = (event, categoryName, id) => {
        if (event.target.checked) {
            dispatch(filterCategory({categoryName, id}))
            dispatch(removeFilterProduct(true))

        } else {
            dispatch(removeFilterProduct(false))
        }
    };




    return (
        <>
            <Box>

                    {
                        Object.entries(separatedProducts).map((item) =>
                            (

                                <Typography variant="h7" component="p" sx={{marginBottom:"20px"}} key={item[0]}>
                                    <Checkbox key={item[0]} onChange={(event) => handleChange(event, item[0], item[1])} />
                                    {item[0]} ({digitsEnToFa(item[1].length)})
                                </Typography>
                            )
                        )
                    }

            </Box>
        </>
    )
}