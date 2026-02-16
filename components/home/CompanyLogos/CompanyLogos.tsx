'use client';

import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const companies = [
    { name: 'Acibadem', logo: 'https://companieslogo.com/img/orig/ACIBADEM.IS-d8777174.png?t=1720244490' },
    { name: 'Akbank', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Akbank_logo.svg/1200px-Akbank_logo.svg.png' },
    { name: 'Akcansa', logo: 'https://companieslogo.com/img/orig/AKCNS.IS-7467389a.png?t=1720244490' },
    { name: 'Akkim', logo: 'https://www.akkim.com/wp-content/uploads/2021/01/akkim-logo.png' },
    { name: 'Akkok', logo: 'https://upload.wikimedia.org/wikipedia/tr/6/6f/Akk%C3%B6k_Holding_logo.png' },
    { name: 'Aktif Bank', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Aktif_Bank_logo.png' },
    { name: 'Allianz', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Allianz_logo.svg/2560px-Allianz_logo.svg.png' },
    // Add more logos as needed
];

export default function CompanyLogos() {
    return (
        <Box sx={{ py: { xs: 4, sm: 6 } }}>
            <Container maxWidth="lg">
                <Grid container spacing={{ xs: 2, sm: 4 }} alignItems="center" justifyContent="center">
                    {companies.map((company) => (
                        <Grid key={company.name} size={{ xs: 6, sm: 4, md: 2 }} sx={{ textAlign: 'center' }}>
                            <Box
                                component="img"
                                src={company.logo}
                                alt={company.name}
                                sx={{
                                    maxWidth: '100px',
                                    maxHeight: '50px',
                                    opacity: 0.6,
                                    filter: 'grayscale(100%)',
                                    transition: '0.3s',
                                    '&:hover': {
                                        opacity: 1,
                                        filter: 'grayscale(0%)'
                                    }
                                }}
                            />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
}
