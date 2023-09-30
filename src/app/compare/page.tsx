'use client'
import { useSelector } from "react-redux";
import { removeCompare } from "@/redux/features/CompareSlice";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import {Box, Grid, IconButton, Paper, Table, TableContainer, TableHead, TableRow, Typography} from "@mui/material";
import Button from "@mui/material/Button";
import * as React from 'react';
import { styled } from '@mui/material/styles';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import {right} from "@popperjs/core";
import styles from "./compare.module.css";
import ClearIcon from '@mui/icons-material/Clear';
import Tooltip from '@mui/material/Tooltip';

export default function ComparePage() {
    const dispatch = useDispatch();
    const { products } = useSelector((store) => store.Compare);

    const handleRemoveFromCompare = useCallback((productId) => {
        dispatch(removeCompare(productId));
    }, []);


    //Table
    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
            // backgroundColor: theme.palette.primary.main,
            color: theme.palette.common.white,
            fontSize: 18,
            // variant:"head"


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

                <table style={{padding:"20px"}} className={styles.tableContainer}>
                    <thead>

                    <tr>
                        <th></th>
                    {products.map((item: { title: string, id: number, image: string }) => {
                        return (

                                <th className={styles.thCell} key={item.id}>{item.title}</th>

                        );
                    })}
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td style={{width:"200px"}}></td>
                        {products.map((item: { title: string, id: number, image: string }) => {
                            return (
                        <td className={styles.tdImg} key={item.id}>
                            <div className={styles.tdDiv}  >
                                <Tooltip title="حذف از مقایسه" >
                                    <IconButton  aria-label="delete" sx={{width:"40px", color:"#D61C38"}} onClick={() => handleRemoveFromCompare(item.id)} >
                                        <ClearIcon   />
                                    </IconButton>

                            </Tooltip>

                                <img key={item.id} src={item.image} alt={item.title}/>
                            </div>

                        </td>
                            );
                        })}
                    </tr>

                        {products.map((item: { title: string, id: number, image: string, category: string }) => {
                            return (
                                <tr className={styles.trCell} key={item.id}>
                                <td style={{padding:'10px'}}>
                                    <p>دسته بندی</p>
                                </td>
                                    {Object.entries(item).map(([key, value]) => {
                                        if (key !== "image" && key !== "id") {
                                            return (
                                                <td key={key} className={styles.tdCell}>
                                                    {value}
                                                </td>
                                            );
                                        } else {
                                            return null;
                                        }
                                    })}
                                </tr>
                            );
                        })}

                    </tbody>
                </table>


        </>


            )}

        </>

    );
}

// <TableContainer component={Paper} sx={{p:"20px"}}>
//     <Table sx={{ minWidth: 700 }} aria-label="customized table">
//         <TableHead>
//             <TableRow>
//
//                 <StyledTableCell variant="head">
//
//                 </StyledTableCell>
//                 <StyledTableCell>
//                     <Grid container sx={{p:"20px"}} spacing={2}>
//                         {products.map((item) => (
//                             <Grid item lg={3} md={3} sm={6} xs={12}  key={item.id}>
//
//                                 <Paper elevation={2} sx={{p:"10px"}}>
//
//                                     <Box style={{ display: "flex", flexDirection: "column" }}>
//                                         <img src={item.image} alt={item.title}></img>
//                                         {item.title}
//                                         <Button onClick={() => handleRemoveFromCompare(item.id)}>حذف از مقایسه</Button>
//                                     </Box>
//                                 </Paper>
//                             </Grid>
//                         ))}
//                     </Grid>
//                 </StyledTableCell>
//             </TableRow>
//
//         </TableHead>
//         <TableBody>
//
//             {products.map((row : {id: number, title: string, power: string, category: string}) => (
//
//                 <StyledTableRow key={row.id}>
//                     <StyledTableCell  component="th" scope="row">
//                         {row.title}
//                     </StyledTableCell>
//                     <StyledTableCell  component="th" scope="row">
//                         {row.title}
//                     </StyledTableCell>
//                 </StyledTableRow>
//
//
//             ))}
//
//         </TableBody>
//     </Table>
// </TableContainer>