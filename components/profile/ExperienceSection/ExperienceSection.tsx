'use client';

import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';

interface Experience {
    title: string;
    company: string;
    date: string;
    duration: string;
    location: string;
    description: string;
}

export default function ExperienceSection({ experiences }: { experiences: Experience[] }) {
    return (
        <Box sx={{ mb: 4 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                <Typography variant="h6" fontWeight="bold" color="text.secondary">Deneyim</Typography>
                <Button size="small" sx={{ textTransform: 'none', color: 'text.secondary' }}>Düzenle</Button>
            </Box>
            <Divider sx={{ mb: 2 }} />

            {experiences.map((exp, idx) => (
                <Box key={idx} sx={{ mb: 3 }}>
                    <Typography variant="subtitle1" fontWeight="bold" color="primary">{exp.title}</Typography>
                    <Typography variant="subtitle2" color="primary">{exp.company}</Typography>
                    <Typography variant="caption" display="block" color="text.secondary" sx={{ mt: 0.5 }}>
                        {exp.date} ({exp.duration})
                    </Typography>
                    <Typography variant="caption" display="block" color="text.secondary" sx={{ mb: 1 }}>
                        {exp.location}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {exp.description}
                    </Typography>
                </Box>
            ))}
        </Box>
    );
}
