import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import * as React from "react";
import Link from "next/link";

export default function PowerTools () {
    return (

    <Container>
        <Box sx={{ my: 2 }}>
            ابزار برقی
        </Box>
        <Link href='/powertools' style={{cursor:"pointer"}}>محتوای مربوط به Tab 2</Link>
    </Container>
    )
}