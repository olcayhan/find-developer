'use client';

import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export default function InterestsSection({ interests }: { interests: string[] }) {
    return (
        <Box sx={{ mb: 4 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                <Typography variant="h6" fontWeight="bold" color="text.secondary">İlgi Alanları</Typography>
                <Button size="small" sx={{ textTransform: 'none', color: 'text.secondary' }}>Düzenle</Button>
            </Box>
            <Divider sx={{ mb: 2 }} />
            <Grid container spacing={2}>
                {interests.map((interest, idx) => (
                    <Grid key={idx} size={{ xs: 12, md: 6 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <CheckCircleIcon color="action" fontSize="small" sx={{ mr: 1 }} />
                            <Typography variant="body2">{interest}</Typography>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}
