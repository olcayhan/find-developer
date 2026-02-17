'use client';

import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';

export default function PopularSearches() {
    const router = useRouter();
    const t = useTranslations('PopularSearches');
    const popularSearches = ['UX designer', 'UI designer', 'Front-end developer', 'Back-end developer', 'iOS developer', 'Android Developer', 'React Native'];

    return (
        <Box sx={{ position: 'relative', bgcolor: '#f5f5f5', py: 2, width: '100%', borderBottom: '1px solid #e0e0e0' }}>
            <Container maxWidth="lg" sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: { xs: 'flex-start', md: 'center' }, gap: { xs: 1, md: 2 } }}>
                <Typography variant="body1" sx={{ color: 'text.secondary', whiteSpace: 'nowrap', mb: { xs: 1, md: 0 } }}>
                    {t('title')}
                </Typography>
                <Box
                    sx={{
                        display: 'flex',
                        gap: 1,
                        overflowX: 'auto',
                        width: '100%',
                        '::-webkit-scrollbar': { display: 'none' },
                    }}
                >
                    {popularSearches.map((term) => (
                        <Chip
                            key={term}
                            label={term}
                            clickable
                            onClick={() => router.push(`/search?q=${term}`)}
                            sx={{
                                bgcolor: '#e9e9e9',
                                color: 'text.secondary',
                                borderRadius: '28px',
                                border: '1px solid #bfbfbfb2',
                                '&:hover': { bgcolor: '#d5d5d5' },
                                px: 4,
                                py: 3,
                                whiteSpace: 'nowrap'
                            }}
                        />
                    ))}
                </Box>
            </Container>
            <Box
                sx={{
                    right: 0,
                    top: 0,
                    position: 'absolute',
                    height: '100%',
                    width: '150px',
                    margin: '0 0 0 28px',
                    backgroundImage: 'linear-gradient(to right, rgba(238, 238, 238, 0), #f7f8fa 25%)',
                }}
            />
        </Box>
    );
}
