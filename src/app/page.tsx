import Header from "../components/header/Header";
import ProductCard from "@/components/ProductCard";
import Container from "@mui/material/Container";
import { PRODUCTS } from '@/lib/data.ts';
import {Grid} from "@mui/material";
import Zoom from "@mui/material/Zoom";
import * as React from "react";

export default function App(){

    return (
        <>
            <Header/>
            <Container >
                <Grid container spacing={2}>

                {PRODUCTS.map((item) => (
                    // <Zoom in={checked}>

                    <Grid item xs={6} md={3}>

                    <ProductCard key={item.id} data={item} />
                    </Grid>
                    // </Zoom>
                ))}
                </Grid>

            </Container>

        </>
    )
}