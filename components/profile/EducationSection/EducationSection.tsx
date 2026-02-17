'use client';

import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';

interface Education {
    school: string;
    degree: string;
    field: string;
    date: string;
}

export default function EducationSection({ education }: { education: Education[] }) {
    return (
        <Box sx={{ mb: 4 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                <Typography variant="h6" fontWeight="bold" color="text.secondary">Eğitim</Typography>
                <Button size="small" sx={{ textTransform: 'none', color: 'text.secondary' }}>Düzenle</Button>
            </Box>
            <Divider sx={{ mb: 2 }} />

            {education.map((edu, idx) => (
                <Box key={idx} sx={{ mb: 3 }}>
                    <Typography variant="subtitle1" fontWeight="bold" color="primary">{edu.school}</Typography>
                    <Typography variant="body2">{edu.degree}</Typography>
                    <Typography variant="body2" color="text.secondary">{edu.field}</Typography>
                    <Typography variant="caption" color="text.secondary">{edu.date}</Typography>
                </Box>
            ))}
        </Box>
    );
}
