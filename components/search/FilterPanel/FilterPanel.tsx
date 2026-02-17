'use client';

import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import Divider from '@mui/material/Divider';
import { useTranslations } from 'next-intl';

interface FilterPanelProps {
    jobCount: number;
    query: string;
}

export default function FilterPanel({ jobCount, query }: FilterPanelProps) {
    const t = useTranslations('Search');

    // Mock suggestion logic for demo purposes matching the screenshot
    const showSuggestion = query.toLowerCase() === 'desing';
    const suggestion = "Design";

    return (
        <Box sx={{ mb: 3, py: 2 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                {/* Left Side: Filters and Results Info */}
                <Box sx={{ display: 'flex', gap: 2 }}>
                    {/* Controls Group: Aligned Center vertically */}
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, height: 40 }}>
                        {/* Filter Button */}
                        <Button
                            startIcon={<FilterAltIcon color="action" />}
                            endIcon={<KeyboardArrowDownIcon color="action" />}
                            sx={{
                                textTransform: 'none',
                                color: 'text.secondary',
                                fontWeight: 500,
                                px: 1
                            }}
                        >
                            {t('filter')}
                        </Button>

                        {/* Recent Searches Button */}
                        <Button
                            endIcon={<KeyboardArrowDownIcon color="action" />}
                            sx={{
                                textTransform: 'none',
                                color: 'text.secondary',
                                fontWeight: 500,
                                px: 1
                            }}
                        >
                            {t('recentSearches')}
                        </Button>

                        <Divider orientation="vertical" flexItem sx={{ height: 24, alignSelf: 'center', mx: 1 }} />
                    </Box>

                    {/* Text Group: Query and Suggestion */}
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        {/* Main Line - aligned with buttons */}
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, height: 40 }}>
                            <Typography variant="h6" sx={{ color: '#4361ee', fontWeight: 'bold', lineHeight: 1 }}>
                                {query || 'Tüm İlanlar'}
                            </Typography>
                            <Typography variant="body1" sx={{ color: 'text.secondary', fontWeight: 'normal', lineHeight: 1 }}>
                                ({jobCount} {t('jobsFound')})
                            </Typography>
                        </Box>

                        {/* "Did you mean?" Suggestion - below main line */}
                        {showSuggestion && (
                            <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block' }}>
                                {t('didYouMean')} <Box component="span" sx={{ fontWeight: 'bold', textDecoration: 'underline', cursor: 'pointer', color: 'text.primary' }}>{suggestion}</Box>
                            </Typography>
                        )}
                    </Box>
                </Box>

                {/* Right Side: Notification */}
                <Button
                    endIcon={<NotificationsNoneIcon />}
                    sx={{
                        textTransform: 'none',
                        color: 'text.secondary',
                        fontWeight: 600,
                        height: 40 // Align with other controls
                    }}
                >
                    {t('notifyMe')}
                </Button>
            </Box>
        </Box>
    );
}
