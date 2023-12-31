'use client'
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useRouter } from 'next/navigation'
import { useState} from 'react';
import {
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    IconButton,
    Paper,
    styled,
} from "@mui/material";
import {CloseIcon} from "next/dist/client/components/react-dev-overlay/internal/icons/CloseIcon";

import {useDispatch} from "react-redux";
import {useCallback} from "react";
import {addToCompare} from "@/redux/features/CompareSlice.ts";
import {useSelector} from "react-redux";
import {LoadingButton} from "@mui/lab";
import store from "@/redux/store.ts";
import {digitsEnToFa} from "@persian-tools/persian-tools";




const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));


export default function ProductCard({data}) {

    //LoadingButton
    const [loadingButton, setLoadingButton] = React.useState(true);


    //Loading on Redirect
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const handleClick = useCallback(() => {
        setLoadingButton(true);
        setLoading(true);

            router.push('/compare');
            return null;

    },[])



    //Send and reserve data from redux store
    const {products} = useSelector(store => store.Compare);
    const duplicatedProducts = products.filter(item => item.id === data.id);
    const isInCompare : boolean | undefined = duplicatedProducts[0]?.isDuplicate;
    const dispatch = useDispatch();


    const handleAddToCompare = useCallback(()=> {
       setOpen(true);
       dispatch(addToCompare(data))

    },[])

    const [open, setOpen] = React.useState(false);

    const handleClose = useCallback(() => {
        setOpen(false);
        setLoading(false);
        router.push('/', { scroll: false });
    },[])



    return (
        <Paper elevation={3} sx={{'&:hover': {boxShadow:"12"}, cursor:"pointer"}}>
        <Card>
        <CardMedia
                sx={{ height: 300,}}
                image="https://danlextools.com/fa/wp-content/uploads/2022/08/dx-1171_dx-1172_dx-1185_cover-300x300.jpg"
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {data.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    دریل چکشی ۸۰۰ وات دنلکس با موتور گیربکسی و سه نظام آچاری
                </Typography>
            </CardContent>
            <CardActions>

                           <Button size="small" onClick={handleAddToCompare}>مقایسه</Button>


                <BootstrapDialog
                    onClose={handleClose}
                    aria-labelledby="customized-dialog-title"
                    open={open}
                    disableScrollLock={ true }
                >
                    {/*{*/}
                    {/*    products.length < 5  ?*/}
                    {/*        (*/}
                    {/*            isInCompare ? (*/}
                    {/*                    <DialogTitle sx={{ mr: 5, p: 2 }} id="customized-dialog-title">*/}
                    {/*                        {data.title} به مقایسه اضافه شده است.*/}
                    {/*                    </DialogTitle>*/}
                    {/*                ) :*/}
                    {/*                (*/}

                    {/*                    <DialogTitle sx={{ mr: 5, p: 2 }} id="customized-dialog-title">*/}
                    {/*                        {data.title} به مقایسه اضافه شد.*/}
                    {/*                    </DialogTitle>*/}
                    {/*                )*/}
                    {/*        ) : (*/}

                    {/*                isInCompare ? (*/}
                    {/*                    <DialogTitle sx={{ mr: 5, p: 2 }} id="customized-dialog-title">*/}
                    {/*                        {data.title} به مقایسه اضافه شده است.*/}
                    {/*                    </DialogTitle>*/}
                    {/*                ) : (*/}

                    {/*                    <DialogTitle sx={{ mr: 5, p: 2 }} id="customized-dialog-title">*/}
                    {/*                           امکان مقایسه بیش از 5 محصول وجود ندارد.*/}
                    {/*                      </DialogTitle>*/}
                    {/*                )*/}


                    {/*        )*/}

                    {/*}*/}

                    {
                        isInCompare  ?
                            (
                                <DialogTitle sx={{ mr: 5, p: 2 }} id="customized-dialog-title">
                                    {data.title} به مقایسه اضافه شده است.
                                </DialogTitle>
                            ) : (
                                products.length < 5 ? (
                                    <DialogTitle sx={{ mr: 5, p: 2 }} id="customized-dialog-title">
                                        {data.title} به مقایسه اضافه شد.
                                    </DialogTitle>
                                    ) : (

                                  <DialogTitle sx={{ mr: 5, p: 2 }} id="customized-dialog-title">
                                      {digitsEnToFa(5)} محصول به مقایسه اضافه شدند. امکان مقایسه بیش از {digitsEnToFa(5)} محصول وجود ندارد.
                                  </DialogTitle>
                                    )
                            )
                    }

                    <IconButton
                        aria-label="close"
                        onClick={handleClose}
                        sx={{
                            position: 'absolute',
                            right: 8,
                            top: 8,
                            color: (theme) => theme.palette.grey[500],
                        }}
                    >
                        <CloseIcon />
                    </IconButton>
                    <DialogContent dividers>

                        <Typography gutterBottom>
                            برای افزودن محصول جدید به مقایسه لطفا این صفحه را ببندید و محصولات دیگر را انتخاب کنید.
                            برای مشاهده مقایسه لطفا روی دکمه زیر کلیک کنید.
                        </Typography>
                    </DialogContent>
                    <DialogActions>


                        {/*<LoadingButton*/}
                        {/*    onClick={handleClick}*/}
                        {/*    endIcon={<CompareIcon />}*/}
                        {/*    loading={loading}*/}
                        {/*    loadingPosition="end"*/}
                        {/*    variant="contained"*/}
                        {/*>*/}
                        {/*    <span>مشاهده مقایسه</span>*/}
                        {/*</LoadingButton>*/}
                        { loading  ? (
                            <LoadingButton
                                loading
                                loadingPosition="end"
                                // startIcon={<CompareIcon />}
                            >
                                <Typography component="p" sx={{marginRight:"20px"}}>مشاهده مقایسه</Typography>
                            </LoadingButton>
                        ) : (
                            <Button autoFocus onClick={handleClick}>
                                مشاهده مقایسه
                            </Button>
                        )
                        }
                    </DialogActions>
                </BootstrapDialog>



                <Button size="small">اطلاعات بیشتر</Button>
            </CardActions>
        </Card>

  </Paper>
    )
}