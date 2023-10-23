'use client'
import {DataType} from "csstype";
import {Box} from "@mui/material"
import {useSearchParams} from "next/navigation";
export default function Search() {
    const searchParams = useSearchParams()

    const inputValue = searchParams.get('inputValue')

    // URL -> `/dashboard?search=my-project`
    // `search` -> 'my-project'
    return <>Search: {inputValue}</>
}