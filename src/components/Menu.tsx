'use client'
import {
    Paper,
    Tabs,
    Tab,
    InputBase,
    Popover,
    Typography,
    Grid,
    Item,
    Box,
    Popper,
    Fade,
    useScrollTrigger, Fab, Toolbar
} from '@mui/material';

import { styled } from '@mui/material/styles';
import * as React from 'react';
import { Search} from "@mui/icons-material";
import SearchIcon from '@mui/icons-material/Search';
import HardwareIcon from '@mui/icons-material/Hardware';
import CarpenterIcon from '@mui/icons-material/Carpenter';
import BuildIcon from '@mui/icons-material/Build';
import PlumbingIcon from '@mui/icons-material/Plumbing';
import Link from 'next/link'
import Zoom from '@mui/material/Zoom';
import { ClickAwayListener } from '@mui/base/ClickAwayListener';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import {useDispatch} from "react-redux";
import {addToSearch} from "@/redux/features/SearchSlice.ts";

export default function NavBar(){
    const dispatch = useDispatch();


    //Tabs
    const [value, setValue] = React.useState(0);
    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };
    //Search
    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: "#3B8AD9",
        '&:hover': {
            backgroundColor: "#3B8AD9",
        },
        marginLeft: 0,
        width: '20%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    }));
    const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color:"white"
    }));
    const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        '& .MuiInputBase-input': {
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingRight: `calc(1em + ${theme.spacing(4)})`,
            fontFamily:"Vazirmatn",
            color:"white",
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('sm')]: {
                width: '12ch',
                '&:focus': {
                    width: '20ch',
                },
            },
        },
    }));

    let timeoutId : any;
    function handleSearch(e: any){
        const searchTerm = e.target.value;
        clearTimeout(timeoutId);
        timeoutId = setTimeout(function () {
            dispatch(addToSearch(searchTerm));
        }, 1000);
    }
    //popover
    const [anchorEl, setAnchorEl] = React.useState<
        HTMLButtonElement | null
    >(null);
    const [checked, setChecked] = React.useState(false);

    const handleTabHover = (
        event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
        index: number
    ) => {

        if (anchorEl !== event.currentTarget) {
            setAnchorEl(event.currentTarget);
            setValue(index);
            setChecked(true);
        }
    };
    const handleCloseMenu = ():void => {
        setAnchorEl(null)
    }
    const handleClickAway = () => {
        setAnchorEl(null)
    };


    const open = Boolean(anchorEl);
    const id = open ? 'simple-popper' : undefined;


    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.primary.main,
        whiteSpace: 'nowrap',
        border:"1px solid",
        boxShadow:"none",
        '&:hover':{
            borderColor:theme.palette.primary.light,
        }
    }));

    //Scroll to Top

    interface Props {
        window?: () => Window;
        children: React.ReactElement;
    }
    function ScrollTop(props: Props) {
        const { children, window } = props;
        const trigger = useScrollTrigger({
            target: window ? window() : undefined,
            disableHysteresis: true,
            threshold: 100,
        });

        const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
            const anchor = (
                (event.target as HTMLDivElement).ownerDocument || document
            ).querySelector('#back-to-top-anchor');

            if (anchor) {
                anchor.scrollIntoView({
                    block: 'center',
                    behavior: 'smooth',
                    inline: 'nearest',
                });
            }
        };

        return (
            <Fade in={trigger}>
                <Box
                    onClick={handleClick}
                    role="presentation"
                    sx={{ position: 'fixed', bottom: 16, right: 16 }}
                >
                    {children}
                </Box>
            </Fade>
        );
    }


    return(
<>
        <Paper elevation={1} square onMouseLeave={handleCloseMenu} sx={{width:"100%", height:"auto", display:"flex", justifyContent:"space-between", alignItems:"center", paddingX:"20%", zIndex:"99"}}
        >


            <Box sx={{display:"flex", justifyContent:"flex-start", alignItems:"center",gap:"10px", width:"80%"}}>
                <Box sx={{width:"130px"}}>
                <Link href="/">

                <img src="https://danlextools.com/fa/wp-content/uploads/2022/06/DANLEX-Logo-PNG-2-300x138-1.png" alt="دنلکس" style={{width:"100%"}} />
                </Link>

                </Box>

            <Tabs value={value} onChange={handleChange} aria-label="icon position tabs example">

                <Tab
                    aria-owns={anchorEl ? "simple-menu" : undefined}
                    aria-haspopup="true"
                    onMouseOver={(event) => handleTabHover(event, 0)}
                    sx={{ fontFamily: 'Vazirmatn'}}
                    icon={<HardwareIcon />}
                    label="ابزار برقی"
                />
                <Tab
                    aria-owns={anchorEl ? "simple-menu" : undefined}
                    aria-haspopup="true"
                    onMouseOver={(event) => handleTabHover(event, 1)}


                    sx={{ fontFamily: 'Vazirmatn'}}
                    icon={<CarpenterIcon />}
                    iconPosition="top"
                    label="ابزار شارژی"
                />
                <Tab
                    onMouseOver={(event) => handleTabHover(event, 2)}

                    sx={{ fontFamily: 'Vazirmatn' }}
                    icon={<BuildIcon />}
                    iconPosition="top"
                    label="ابزار بنزینی"
                />
                <Tab
                    onMouseOver={(event) => handleTabHover(event, 3)}

                    sx={{ fontFamily: 'Vazirmatn' }}
                    icon={<PlumbingIcon />}
                    iconPosition="top"
                    label="کیف و جعبه ابزار"
                />
            </Tabs>
</Box>

            <ClickAwayListener onClickAway={handleCloseMenu}>

            <Popper
                id={id}
                open={open}
                anchorEl={anchorEl}
                onMouseLeave={handleCloseMenu}
                onClick={handleCloseMenu}
                placement="bottom-end"
                sx={{ zIndex:"99"}}



            >
                <Paper elevation={16} sx={{ p: 2, marginTop: 1, border:"1px" }}>

                    {/*value 0 = powertools*/}
                    {/*value  1 = cordless tools*/}
                    {/*value 2 = benzin tools*/}
                    {/*value 3 = box*/}

                    {value === 0 &&
                        <div style={{height:"100%"}} >
                            <Grid container spacing={2} sx={{
                                height:"100%",
                            }}>
                                <Zoom in={checked}>

                                <Grid item xs={6} md={3} sx={{
                                    height:"100%",
                                    width:"100%",
                                }}  >
                                    <Link href='/powertools' style={{textDecorationLine:'none'}}>

                                    <Item sx={{height:"100%", width:"100%",
                                        }} >
                                        <Box sx={{display:"flex", justifyContent:"space-between", alignItems:"center", height:"100%"}}  >
                                            <Box sx={{width:"100px"}}>
                                                <img style={{width:"100%"}} src="https://danlextools.com/fa/wp-content/uploads/2022/08/dx-1171_dx-1172_dx-1185_cover-300x300.jpg" alt="دریل برقی"/>
                                            </Box>
                                            <Box>
                                                <Typography variant="h6" component="p">
                                                    دریل برقی
                                                </Typography>
                                            </Box>
                                        </Box>
                                    </Item>
                            </Link>
                                </Grid>
                            </Zoom>
                            <Zoom in={checked} style={{ transitionDelay: checked ? '200ms' : '0ms' }}>
                                <Grid item xs={6} md={3} >
                                    <Item sx={{height:"100%", width:"100%"}}>
                                        <Box sx={{display:"flex", justifyContent:"space-between", alignItems:"center", height:"100%"}}>
                                            <Box sx={{width:"100px"}}>
                                                <img style={{width:"100%"}} src="https://danlextools.com/fa/wp-content/uploads/2022/09/dx-9328a_cover-300x300.jpg" alt="دریل برقی"/>
                                            </Box>
                                            <Box>
                                                <Typography variant="h6" component="p">
                                                    پیچ گوشتی برقی
                                                </Typography>
                                            </Box>
                                        </Box>
                                    </Item>
                                </Grid>
                                </Zoom>

                                <Zoom in={checked} style={{ transitionDelay: checked ? '400ms' : '0ms' }}>
                                <Grid item xs={6} md={3}>
                                    <Item sx={{height:"100%"}}>
                                        <Box sx={{display:"flex", justifyContent:"space-between", alignItems:"center", height:"100%"}}>
                                            <Box sx={{width:"100px"}}>
                                                <img style={{width:"100%"}} src="https://danlextools.com/fa/wp-content/uploads/2022/05/dx-3232_cover-300x300.jpg" alt="دریل برقی"/>
                                            </Box>
                                            <Box>
                                                <Typography variant="h6" component="p">
                                                    بتن کن برقی
                                                </Typography>
                                            </Box>
                                        </Box>
                                    </Item>
                                </Grid>
                                </Zoom>

                                <Zoom in={checked} style={{ transitionDelay: checked ? '600ms' : '0ms' }}>
                                <Grid item xs={6} md={3}>
                                    <Item sx={{height:"100%"}}>
                                        <Box sx={{display:"flex", justifyContent:"space-between", alignItems:"center", height:"100%"}}>
                                            <Box sx={{width:"100px"}}>
                                                <img style={{width:"100%"}} src="https://danlextools.com/fa/wp-content/uploads/2022/05/dx-3516_coverEdited-300x300.jpg" alt="دریل برقی"/>
                                            </Box>
                                            <Box>
                                                <Typography variant="h6" component="p">
                                                    چکش تخریب برقی
                                                </Typography>
                                            </Box>
                                        </Box>
                                    </Item>
                                </Grid>
                                </Zoom>

                            </Grid>


                        </div>
                    }
                    {value === 1 && <Link href='/powertools'>
                        <Box sx={{display:"flex", justifyContent:"space-between", alignItems:"center", height:"100%"}}>
                            <Box sx={{width:"100px"}}>
                                <img style={{width:"100%"}} src="https://danlextools.com/fa/wp-content/uploads/2022/05/dx-3516_coverEdited-300x300.jpg" alt="دریل برقی"/>
                            </Box>
                            <Box>
                                <Typography variant="h6" component="p">
                                    چکش تخریب برقی
                                </Typography>
                            </Box>
                            <Box sx={{width:"100px"}}>
                                <img style={{width:"100%"}} src="https://danlextools.com/fa/wp-content/uploads/2022/05/dx-3516_coverEdited-300x300.jpg" alt="دریل برقی"/>
                            </Box>
                            <Box>
                                <Link href="/powertools">

                                <Typography variant="h6" component="p">

                                    چکش تخریب برقی

                                </Typography>
                                    </Link>
                            </Box>
                        </Box>

                    </Link>}
                    {value === 2 && <div>محتوای مربوط به Tab 3</div>}
                    {value === 3 && <div>محتوای مربوط به Tab 4</div>}
                </Paper>
            </Popper>
            </ClickAwayListener>


            <Search>
                <SearchIconWrapper>
                    <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                    placeholder="جستجو…"
                    inputProps={{ 'aria-label': 'search' }}
                    onKeyUp={handleSearch}
                />
            </Search>


            <Toolbar id="back-to-top-anchor" />

        </Paper>

    <ScrollTop >
        <Fab size="small" aria-label="scroll back to top">
            <KeyboardArrowUpIcon />
        </Fab>
    </ScrollTop>
</>
    )
}
