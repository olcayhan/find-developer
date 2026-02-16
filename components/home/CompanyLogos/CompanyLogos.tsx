'use client';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

const companies = [
    { name: 'Acibadem', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/ff/Ac%C4%B1badem_Grup_logo.svg' },
    { name: 'Akbank', logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Akbank_logo.svg' },
    { name: 'Akcansa', logo: 'https://www.akcansa.com.tr/wp-content/uploads/2023/05/logo-akcansa.svg' },
    { name: 'Akkim', logo: 'https://akkim.com.tr/wp-content/uploads/2022/03/Akkim-logo-1.png' },
    { name: 'Akkok', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/52/Akk%C3%B6k_Holding_logo.png' },
    { name: 'Aktif Bank', logo: 'https://upload.wikimedia.org/wikipedia/commons/e/e9/Aktif_Bank_logo.svg' },
    { name: 'Allianz', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4b/Allianz.svg' },
    { name: 'Anadolu Sigorta', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/9e/Anadolu_Sigorta_logo.svg' },
    { name: 'Anel Group', logo: 'https://www.etmd.org.tr/wp-content/uploads/2020/01/20-ANEL-logo.png' },
    { name: 'Arçelik', logo: 'https://upload.wikimedia.org/wikipedia/commons/b/bd/Ar%C3%A7elik_logo.svg' },
    { name: 'Bosch', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/23/BSH_Bosch_und_Siemens_Hausger%C3%A4te_logo.svg' },
    { name: 'Bemzi Alem', logo: 'https://upload.wikimedia.org/wikipedia/tr/2/21/Bezmi%C3%A2lem_Vak%C4%B1f_%C3%9Cniversitesi_logosu.png' },
    { name: 'Rönesans Holding', logo: 'https://upload.wikimedia.org/wikipedia/tr/d/d7/Ronesans_holding.png' },
    { name: 'TAV Airport', logo: 'https://tavairports.com/images/TAV-Havalimanlari-logo.svg' }
];

export default function CompanyLogos() {
    return (
        <Box sx={{ py: { xs: 4, sm: 6 } }}>
            <Container maxWidth="lg" sx={{ backgroundColor: '#f7f6f6', borderRadius: '20px', paddingY: '30px', paddingX: '18px' }}>
                <Grid container spacing={{ xs: 2, sm: 4 }} alignItems="center" justifyContent="center">
                    {companies.map((company) => (
                        <Grid key={company.name} columns={{ xs: 7, sm: 4, md: 2 }} sx={{ textAlign: 'center' }}>
                            <Box
                                component="img"
                                src={company.logo}
                                alt={company.name}
                                sx={{
                                    filter: 'grayscale(100%)',
                                    opacity: 0.6,
                                    objectFit: 'contain',
                                    width: '136px',
                                    height: '95px'
                                }}
                            />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
}
