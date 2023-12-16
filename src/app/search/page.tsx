'use client'
import {Box, Typography} from "@mui/material"
import {useSearchParams} from "next/navigation";
import * as React from "react";
import {SearchItems} from '@/utils/SearchItems.ts'
import Tabs from '@/app/search/components/Tabs.tsx'
import {searchResultType} from "@/lib/types.ts";
import {digitsEnToFa} from "@persian-tools/persian-tools";
import ProductSearchFilter from "@/app/search/components/ProductSearchFilter.tsx";

export default function Search() {
    const searchParams = useSearchParams()
    // const [searchResults, setSearchResults] = useState([{}])

    const inputValue = searchParams.get('q')

    const searchResult:Array<searchResultType> = SearchItems(inputValue)

    return <>
        <Box sx={{py:"80px", px:"20%"}}>

        <Box>
            <Typography variant="h2" component="h2">{digitsEnToFa(searchResult.length)} محصول مطابق جستجوی کلمه "{inputValue}" پیدا شد.</Typography>
        </Box>

            <Box sx={{display:"flex", py:"50px"}}>
                <Box sx={{width:"20%"}}>
                    <ProductSearchFilter searchResult={searchResult} />
                </Box>
                <Box sx={{width:"80%"}}>
                    <Tabs searchResult={searchResult}/>
                </Box>
            </Box>


        </Box>

    </>
}