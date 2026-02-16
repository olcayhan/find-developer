'use client';

import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import jobs from '../../../mock/jobs.json'; // We will fetch or import this

// Mock data import workaround if json import is not enabled directly
const jobs = [
    {
        "id": "1",
        "title": "IT Müdürü",
        "company": "Bosch",
        "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Bosch-Logo.svg/2560px-Bosch-Logo.svg.png"
    },
    {
        "id": "2",
        "title": "Front-end Developer",
        "company": "Aktif Bank",
        "logo": "https://upload.wikimedia.org/wikipedia/commons/4/4e/Aktif_Bank_logo.png"
    },
    {
        "id": "3",
        "title": "Back-end Developer",
        "company": "Akbank",
        "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Akbank_logo.svg/1200px-Akbank_logo.svg.png"
    },
    {
        "id": "4",
        "title": ".net Developer",
        "company": "Arçelik",
        "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Arcelik_Logo.svg/2560px-Arcelik_Logo.svg.png"
    },
    {
        "id": "5",
        "title": "Junior .net Developer",
        "company": "Allianz",
        "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Allianz_logo.svg/2560px-Allianz_logo.svg.png"
    },
    {
        "id": "6",
        "title": "Sales Manager",
        "company": "Bezmialem Vakıf Üniversitesi",
        "logo": "https://bezmialem.edu.tr/assets/images/logo.png"
    }
];


export default function FeaturedJobs() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
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
        <Box sx={{ py: { xs: 4, sm: 6 }, bgcolor: '#f9f9f9' }}>
            <Container maxWidth="lg">
                <Typography variant="h6" gutterBottom color="textHook" sx={{ mb: 3, ml: 1, fontSize: { xs: '1.25rem', md: '1.5rem' } }}>
                    Öne çıkan iş ilanları
                </Typography>
                <Box sx={{ mx: -1 }}>
                    <Slider {...settings}>
                        {jobs.map((job) => (
                            <Box key={job.id} sx={{ px: 1 }}>
                                <Card sx={{ height: '100%', textAlign: 'center', boxShadow: 1, borderRadius: 2, minHeight: 180, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                    <CardContent>
                                        <Typography variant="subtitle1" component="div" fontWeight="bold" noWrap>
                                            {job.title}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary" gutterBottom>
                                            {job.company}
                                        </Typography>
                                        <Box sx={{ mt: 2, height: 50, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                            <img src={job.logo} alt={job.company} style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }} />
                                        </Box>
                                    </CardContent>
                                </Card>
                            </Box>
                        ))}
                    </Slider>
                </Box>
            </Container>
        </Box>
    );
}
