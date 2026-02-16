'use client';

import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function HeroSection() {
    const router = useRouter();
    const [keyword, setKeyword] = React.useState('');

    const handleSearch = () => {
        router.push(`/search?q=${keyword}`);
    };


    return (
        <Box
            sx={{
                pt: { xs: 4, sm: 6, md: 8 },
                pb: { xs: 4, sm: 6 },
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            <Image
                src="/assets/images/bg.webp"
                alt="Background"
                fill
                priority
                style={{
                    objectFit: 'cover',
                    zIndex: 0,
                }}
            />

            <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Box sx={{ position: 'relative', width: { xs: '280px', sm: '480px', md: '700px' }, height: { xs: '72px', sm: '92px' }, mb: { xs: 2 } }}>
                        <Image
                            src="/assets/images/logo.webp"
                            alt="Logo"
                            fill
                            style={{ objectFit: 'contain' }}
                            priority
                        />
                    </Box>

                    <Box sx={{ position: 'relative', width: { xs: '200px', sm: '300px', md: "460px" }, height: { xs: '40px', md: '60px' }, mb: { xs: 3, sm: 4 } }}>
                        <Image
                            src="/assets/images/header-text.webp"
                            alt="find your teammate"
                            fill
                            style={{ objectFit: 'contain' }}
                            priority
                        />
                    </Box>
                </Box>

                <Box sx={{ maxWidth: '800px', mx: 'auto', display: 'flex', gap: 2, alignItems: { xs: 'center', sm: 'flex-start' }, flexDirection: { xs: 'column', sm: 'row' }, width: '100%' }}>
                    <Box
                        sx={{
                            flex: 1,
                            bgcolor: 'white',
                            borderRadius: '30px',
                            pl: 2, // Left padding for input
                            pr: 1, // Right padding
                            boxShadow: 3,
                            width: '100%',
                            display: 'flex',
                            alignItems: 'center',
                            height: '60px' // Fixed height
                        }}
                    >
                        <TextField
                            fullWidth
                            placeholder="İş Ara | Şirket, Anahtar Kelime"
                            value={keyword}
                            onChange={(e) => setKeyword(e.target.value)}
                            variant="standard"
                            slotProps={{
                                input: {
                                    disableUnderline: true,
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <SearchIcon color="action" />
                                        </InputAdornment>
                                    ),
                                    sx: { fontSize: '1.1rem' }
                                }
                            }}
                            sx={{ flex: 1 }}
                        />
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
                        <Button
                            variant="contained"
                            onClick={handleSearch}
                            sx={{
                                bgcolor: 'white',
                                color: 'primary.main',
                                borderRadius: '30px',
                                px: 4,
                                minWidth: '120px',
                                height: '60px',
                                boxShadow: 3,
                                '&:hover': {
                                    bgcolor: '#f5f5f5'
                                }
                            }}
                        >
                            <Image
                                src="/assets/images/find-text.webp"
                                alt="Find"
                                width={60}
                                height={25}
                                style={{ objectFit: 'contain' }}
                                priority
                            />
                        </Button>
                        <Typography
                            variant="caption"
                            component="span"
                            sx={{
                                cursor: 'pointer',
                                color: 'white',
                                textDecoration: 'underline',
                                '&:hover': { opacity: 0.8 }
                            }}
                            onClick={() => router.push('/search')}
                        >
                            Detaylı Arama
                        </Typography>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}
