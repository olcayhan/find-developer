'use client';

import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Slider from 'react-slick';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const jobs = [
    {
        "id": "1",
        "title": "IT Müdürü",
        "company": "Bosch",
        "logo": "https://upload.wikimedia.org/wikipedia/commons/2/23/BSH_Bosch_und_Siemens_Hausger%C3%A4te_logo.svg"
    },
    {
        "id": "2",
        "title": "Front-end Developer",
        "company": "Aktif Bank Genel Mü...",
        "logo": "https://upload.wikimedia.org/wikipedia/commons/e/e9/Aktif_Bank_logo.svg"
    },
    {
        "id": "3",
        "title": "Back-end Developer",
        "company": "Akbank Bank Genel...",
        "logo": "https://upload.wikimedia.org/wikipedia/commons/7/7b/Akbank_logo.svg"
    },
    {
        "id": "4",
        "title": ".net Developer",
        "company": "Arçelik",
        "logo": "https://upload.wikimedia.org/wikipedia/commons/b/bd/Ar%C3%A7elik_logo.svg"
    },
    {
        "id": "5",
        "title": "Junior .net Developer",
        "company": "Allianz",
        "logo": "https://upload.wikimedia.org/wikipedia/commons/4/4b/Allianz.svg"
    },
    {
        "id": "6",
        "title": "Sales Manager",
        "company": "Bezmialem Vakıf Ün...",
        "logo": "https://upload.wikimedia.org/wikipedia/tr/2/21/Bezmi%C3%A2lem_Vak%C4%B1f_%C3%9Cniversitesi_logosu.png"
    }
];

function NextArrow(props: any) {
    const { className, style, onClick } = props;
    return (
        <IconButton
            onClick={onClick}
            sx={{
                position: 'absolute',
                right: -20,
                top: '50%',
                transform: 'translateY(-50%)',
                zIndex: 2,
                bgcolor: 'rgba(0,0,0,0.5)',
                color: 'white',
                '&:hover': {
                    bgcolor: 'rgba(0,0,0,0.7)',
                },
                width: 40,
                height: 40,
                borderRadius: 2
            }}
        >
            <ArrowForwardIcon />
        </IconButton>
    );
}

function PrevArrow(props: any) {
    const { className, style, onClick } = props;
    return (
        <IconButton
            onClick={onClick}
            sx={{
                position: 'absolute',
                left: -20,
                top: '50%',
                transform: 'translateY(-50%)',
                zIndex: 2,
                bgcolor: 'rgba(0,0,0,0.5)',
                color: 'white',
                '&:hover': {
                    bgcolor: 'rgba(0,0,0,0.7)',
                },
                width: 40,
                height: 40,
                borderRadius: 2
            }}
        >
            <ArrowBackIcon />
        </IconButton>
    );
}

import { useTranslations } from 'next-intl';

export default function FeaturedJobs() {
    const t = useTranslations('FeaturedJobs');
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    return (
        <Box sx={{ py: { xs: 4, sm: 6 }, bgcolor: '#f9f9f9-white' }}>
            <Container maxWidth="lg">
                <Typography variant="h6" gutterBottom color="textHook" sx={{ mb: 3, ml: 1, fontSize: { xs: '1.25rem', md: '1.5rem' }, color: 'text.secondary' }}>
                    {t('title')}
                </Typography>
                <Box
                    sx={{
                        border: '1px solid #e0e0e0',
                        borderRadius: 2,
                        bgcolor: 'white',
                        position: 'relative',
                        px: 1
                    }}
                >
                    <Slider {...settings}>
                        {jobs.map((job) => (
                            <Box key={job.id} sx={{ position: 'relative' }}>
                                <Box
                                    sx={{
                                        p: 2,
                                        height: '100%',
                                        minHeight: 140,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        textAlign: 'center',
                                        borderRight: '1px solid #f0f0f0'
                                    }}
                                >
                                    <Box>
                                        <Typography variant="subtitle1" component="div" fontWeight="bold" color="text.secondary" sx={{ fontSize: '20px' }} noWrap>
                                            {job.title}
                                        </Typography>
                                        <Typography variant="caption" color="#6b7998" gutterBottom sx={{ fontSize: '16px', display: 'block' }}>
                                            {job.company}
                                        </Typography>
                                    </Box>
                                    <Box sx={{ height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
                                        <Box
                                            component="img"
                                            src={job.logo}
                                            alt={job.company}
                                            sx={{
                                                maxHeight: '100%',
                                                maxWidth: '80%',
                                                objectFit: 'contain',
                                                filter: 'grayscale(100%)',
                                                opacity: 0.7,
                                                transition: 'all 0.3s ease',
                                            }}
                                        />
                                    </Box>
                                </Box>
                            </Box>
                        ))}
                    </Slider>
                </Box>
            </Container>
        </Box>
    );
}
