'use client';

import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import { useRouter } from 'next/navigation';

export default function PopularSearches() {
    const router = useRouter();
    const popularSearches = ['UX designer', 'UI designer', 'Front-end developer', 'Back-end developer', 'iOS developer', 'Android Developer', 'React Native'];

    return (
        <Box sx={{ bgcolor: '#f5f5f5', py: 2, width: '100%', borderBottom: '1px solid #e0e0e0' }}>
            <Container maxWidth="lg" sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: { xs: 'flex-start', md: 'center' }, gap: { xs: 1, md: 2 } }}>
                <Typography variant="body1" sx={{ color: 'text.secondary', whiteSpace: 'nowrap', mb: { xs: 1, md: 0 } }}>
                    Popüler aramalar
                </Typography>
                <Box
                    sx={{
                        display: 'flex',
                        gap: 1,
                        overflowX: 'auto',
                        pb: 0.5,
                        width: '100%',
                        '::-webkit-scrollbar': { display: 'none' },
                        msOverflowStyle: 'none',  /* IE and Edge */
                        scrollbarWidth: 'none',  /* Firefox */
                    }}
                >
                    {popularSearches.map((term) => (
                        <Chip
                            key={term}
                            label={term}
                            clickable
                            onClick={() => router.push(`/search?q=${term}`)}
                            sx={{
                                bgcolor: '#e0e0e0',
                                color: 'text.primary',
                                borderRadius: '16px',
                                border: 'none',
                                '&:hover': { bgcolor: '#d5d5d5' },
                                flexShrink: 0 // Prevent shrinking
                            }}
                        />
                    ))}
                </Box>
            </Container>
        </Box>
    );
}
