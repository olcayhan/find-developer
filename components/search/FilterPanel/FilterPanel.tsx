'use client';

import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import FilterListIcon from '@mui/icons-material/FilterList';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';

interface FilterPanelProps {
    jobCount: number;
    query: string;
}

export default function FilterPanel({ jobCount, query }: FilterPanelProps) {
    return (
        <Box sx={{ mb: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2, flexWrap: 'wrap', gap: 2 }}>
                <Box sx={{ display: 'flex', gap: 2 }}>
                    <Button
                        startIcon={<FilterListIcon />}
                        endIcon={<KeyboardArrowDownIcon />}
                        color="inherit"
                        sx={{ textTransform: 'none', color: '#555' }}
                    >
                        Filtrele
                    </Button>
                    <Button
                        endIcon={<KeyboardArrowDownIcon />}
                        color="inherit"
                        sx={{ textTransform: 'none', color: '#555' }}
                    >
                        Son Aramalar
                    </Button>
                </Box>

                <FormControlLabel
                    control={<Switch defaultChecked />}
                    label={
                        <Box sx={{ display: 'flex', alignItems: 'center', color: '#555' }}>
                            <Typography variant="body2" sx={{ mr: 1 }}>Beni Bilgilendir</Typography>
                            <NotificationsNoneIcon fontSize="small" />
                        </Box>
                    }
                />
            </Box>

            <Typography variant="h6" color="primary" sx={{ fontWeight: 'bold' }}>
                {query || 'Tüm İlanlar'} <Box component="span" sx={{ color: '#777', fontSize: '1rem', fontWeight: 'normal' }}>({jobCount} iş ilanı bulundu)</Box>
            </Typography>
            <Typography variant="caption" color="text.secondary">
                Bunu mu demek istedin? <Box component="span" sx={{ textDecoration: 'underline', cursor: 'pointer' }}>{query}</Box>
            </Typography>
        </Box>
    );
}
