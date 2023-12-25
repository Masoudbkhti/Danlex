'use client'
import {Box, Typography} from "@mui/material"
import {useSearchParams} from "next/navigation";
import * as React from "react";
import {SearchItems} from '@/utils/SearchItems.ts'
import Tabs from '@/app/search/components/Tabs.tsx'
import {digitsEnToFa} from "@persian-tools/persian-tools";
import ProductSearchFilter from "@/app/search/components/ProductSearchFilter.tsx";
import {addToSearch} from "@/redux/features/SearchSlice.ts";
import {useDispatch, useSelector} from "react-redux";
import { useEffect} from "react";
export default function Search() {
    const searchParams = useSearchParams()
    const dispatch = useDispatch();
    const inputValue = searchParams.get('q')
    const categoryFilter = searchParams.get('category')
    const searchResult = SearchItems(inputValue);

    useEffect(() => {
        dispatch(addToSearch(searchResult));

    }, [inputValue]);

    const selector = useSelector((store) => store.Search);
    console.log(selector.searchItems,"searchitemsss")
    return <>
        <Box sx={{py:"80px", px:"20%"}}>

        <Box>
            <Typography variant="h2" component="h2">{digitsEnToFa(selector.searchItems.length)} محصول مطابق جستجوی کلمه "{inputValue}" پیدا شد.</Typography>
        </Box>

            <Box sx={{display:"flex", py:"50px"}}>
                <Box sx={{width:"20%"}}>
                    <ProductSearchFilter searchResult={selector.searchItems} />
                </Box>
                <Box sx={{width:"80%"}}>
                    <Tabs searchResult={selector.filteredProducts.length === 0 ? selector.searchItems : selector.filteredProducts}/>
                </Box>
            </Box>


        </Box>

    </>
}