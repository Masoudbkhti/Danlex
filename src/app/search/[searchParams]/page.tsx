'use client'
import {Box, Typography} from "@mui/material"
import {useSearchParams} from "next/navigation";
import * as React from "react";
import {SearchItems} from '@/utils/SearchItems.ts'
import Tabs from './components/Tabs.tsx'
import {searchResultType} from "@/lib/types.ts";

export default function Search() {
    const searchParams = useSearchParams()
    // const [searchResults, setSearchResults] = useState([{}])

    const inputValue = searchParams.get('inputValue')

    const searchResult:Array<searchResultType> = SearchItems(inputValue)

    return <>
        <Box sx={{py:"80px", px:"20%"}}>

        <Box>
            <Typography variant="h2" component="h2">{searchResult.length} محصول مطابق جستجوی کلمه "{inputValue}" پیدا شد.</Typography>
        </Box>

            <Box sx={{display:"flex", py:"50px"}}>
                <Box sx={{width:"20%"}}>

                </Box>
                <Box sx={{width:"80%"}}>
                    <Tabs searchResult={searchResult}/>
                </Box>
            </Box>
        </Box>

    </>
}