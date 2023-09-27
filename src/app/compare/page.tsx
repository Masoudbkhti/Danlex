'use client'
import { useSelector } from "react-redux";
import { removeCompare } from "@/redux/features/CompareSlice";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import {Box, Grid, Paper, Table, TableContainer, TableHead, TableRow, Typography} from "@mui/material";
import Button from "@mui/material/Button";
import * as React from 'react';
import { styled } from '@mui/material/styles';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import {right} from "@popperjs/core";
export default function ComparePage() {
    const dispatch = useDispatch();
    const { products } = useSelector((store) => store.Compare);

    const handleRemoveFromCompare = useCallback((productId) => {
        dispatch(removeCompare(productId));
    }, []);


    //Table
    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.common.white,
            fontSize: 18,
            variant:"head"


        },
        [`&.${tableCellClasses.body}`]: {
            fontSize: 14,
        },
    }));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,

    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));


    return (
        <>
            {
                products.length === 0 ? (
                    <Typography variant="h2" component="p" sx={{p:"20px", textAlign:"center"}}>
                        هیچ محصولی به مقایسه اضافه نشده است.
                    </Typography>
                ) : (
        <>



            <TableContainer component={Paper} sx={{p:"20px"}}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>
                                <Grid container sx={{p:"20px"}} spacing={2}>
                                    {products.map((item) => (
                                        <Grid item lg={3} md={3} sm={6} xs={12}  key={item.id}>

                                            <Paper elevation={2} sx={{p:"10px"}}>

                                                <Box style={{ display: "flex", flexDirection: "column" }}>
                                                    <img src={item.image} alt={item.title}></img>
                                                    {item.title}
                                                    <Button onClick={() => handleRemoveFromCompare(item.id)}>حذف از مقایسه</Button>
                                                </Box>
                                            </Paper>
                                        </Grid>
                                    ))}
                                </Grid>
                            </StyledTableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {products.map((row : {id: number, title: string, power: string, category: string}) => (
                            <StyledTableRow key={row.id} sx={{display:"flex", flexDirection:"column"}}>
                                <StyledTableCell component="th" scope="row">
                                    {row.title}
                                </StyledTableCell>
                                {/*<StyledTableCell align="right">{row.power}</StyledTableCell>*/}

                                {/*<StyledTableCell align="right">{row.category}</StyledTableCell>*/}

                                {/*<StyledTableCell align="right">{row.category}</StyledTableCell>*/}

                                {/*<StyledTableCell align="right">{row.category}</StyledTableCell>*/}

                                {/*<StyledTableCell align="right">{row.category}</StyledTableCell>*/}

                                {/*<StyledTableCell align="right">{row.category}</StyledTableCell>*/}

                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>


            )}

        </>

    );
}