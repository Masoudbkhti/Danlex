'use client'
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';

import './header.module.css';

// import required modules
import { Scrollbar } from 'swiper/modules';
import {Box, Typography} from "@mui/material";
export default function App(){
    return (
        <>
            <Swiper
                scrollbar={{
                    hide: true,
                }}
                modules={[Scrollbar]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <Box sx={{position:"relative"}}>

                    <video width="100%" height="100%" autoPlay loop>
                        <source src="https://www.einhell.de/fileadmin/corporate-media/battery-system/pure-power-brushless/einhell-purepowerbrushless-hero-video.mp4" type="video/mp4" />
                    </video>
                    <Typography variant="h2" component="h2" sx={{position:"absolute", right:"100px", bottom:"100px", color:'white', backgroundColor:"rgba(0, 0, 0, 0.3)", p:"10px", borderRadius:"8px"}}>
                        بهترین ابزارآلات شارژی با موتور براشلس
                    </Typography>
                    </Box>

                </SwiperSlide>
                <SwiperSlide>
                    <Box sx={{position:"relative"}}>

                        <video width="100%" height="100%" autoPlay loop>
                            <source src="https://www.einhell.de/fileadmin/corporate-media/campaigns/the-e-team/e-team_x_mercedes_2023/einhell-campaign-e-team-mercedes-herovideo.mp4" type="video/mp4" />
                        </video>
                        <Typography variant="h2" component="h2" sx={{position:"absolute", right:"100px", bottom:"100px", color:'white', backgroundColor:"rgba(0, 0, 0, 0.3)", p:"10px", borderRadius:"8px"}}>
                            تنوع بی نظیر بیش از ۲۰۰۰ نوع محصول
                        </Typography>
                    </Box>

                </SwiperSlide>
                <SwiperSlide>
                    <Box sx={{position:"relative"}}>

                        <img src="https://www.einhell.de/fileadmin/com/insights/sinus-study/einhell-sinus-study-hero-desktop.jpg" alt="خدمات پس از فروش دنلکس" />

                        <Typography variant="h2" component="h2" sx={{position:"absolute", right:"100px", bottom:"100px", color:'white', backgroundColor:"rgba(0, 0, 0, 0.3)", p:"10px", borderRadius:"8px"}}>
                            خدمات پس از فروش در تمام نقاط ایران
                        </Typography>
                    </Box>
                </SwiperSlide>

            </Swiper>
        </>
    )
}