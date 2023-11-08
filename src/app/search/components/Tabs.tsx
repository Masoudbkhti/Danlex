import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from "next/link";
import {searchResultType} from "@/lib/types.ts";
import ProductSearchCart from "@/app/search/components/ProductSearchCart.tsx";
interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
    hidden={value !== index}
    id={`simple-tabpanel-${index}`}
    aria-labelledby={`simple-tab-${index}`}
    {...other}
>
    {value === index && (
        <Box sx={{ p: 3 }}>
        <Typography>{children}</Typography>
        </Box>
    )}
    </div>
);
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function BasicTabs({ searchResult }: { searchResult: Array<searchResultType> }) {
    console.log(searchResult,"search result")
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }}>
    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
    <Tab label="محصولات" {...a11yProps(0)} />
    <Tab label="بلاگ" {...a11yProps(1)} />
    <Tab label="سایر" {...a11yProps(2)} />
    </Tabs>
    </Box>
    <CustomTabPanel value={value} index={0}>
        <Box sx={{display:"flex", flexDirection:"column",width:"100%", gap:"10px"}}>
            {
                searchResult.length > 0 ? (
                    searchResult.map((item: any) => (
                        <Link style={{marginBottom:"5px", textDecoration: "none"}} key={item.id} href={`/product/${item.title}`}>
                            <ProductSearchCart title={item.title} id={item.id}/>
                        </Link>
                    ))
                ) : (
                    <Typography variant="h4" component="p" gutterBottom>محصولی مطابق جستجو شما پیدا نشد.</Typography>
                )
            }
        </Box>
    </CustomTabPanel>
    <CustomTabPanel value={value} index={1}>
        بلاگ
    </CustomTabPanel>
    <CustomTabPanel value={value} index={2}>
        سایر
    </CustomTabPanel>
    </Box>
);
}