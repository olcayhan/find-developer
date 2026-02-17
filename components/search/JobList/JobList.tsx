'use client';

import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/tr'; // Import locale if needed

dayjs.extend(relativeTime);
dayjs.locale('tr'); // Set locale to Turkish

interface Job {
    id: string;
    title: string;
    company: string;
    location: string;
    type: string;
    description: string;
    logo: string;
    postedDate?: string;
}

export interface JobListProps {
    jobs: Job[];
    selectedJobId: string | null;
    onSelectJob: (id: string) => void;
    noResults?: boolean;
}

export default function JobList({ jobs, selectedJobId, onSelectJob, noResults }: JobListProps) {
    return (
        <Box>
            {noResults && (
                <Box sx={{ mb: 3 }}>
                    <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#4361ee', mb: 1 }}>
                        Eşleşen iş ilanı yok
                    </Typography>
                </Box>
            )}

            <Card sx={{
                borderRadius: 2,
                border: '1px solid #eaecf0',
                boxShadow: '0 1px 3px rgba(16, 24, 40, 0.1)',
                overflow: 'hidden',
                bgcolor: 'white'
            }}>
                {/* Header Section */}
                <Box sx={{
                    p: 2,
                    bgcolor: '#f9fafb',
                    borderBottom: '1px solid #eaecf0'
                }}>
                    <Typography variant="body2" color="text.secondary">
                        {noResults ? 'İlgilenebileceğiniz iş ilanları' : 'Bulunan İlanlar'}
                    </Typography>
                </Box>

                <List sx={{
                    width: '100%',
                    p: 0,
                    maxHeight: 'calc(100vh - 300px)',
                    overflowY: 'auto',
                    '&::-webkit-scrollbar': {
                        width: '6px',
                    },
                    '&::-webkit-scrollbar-track': {
                        background: 'transparent',
                    },
                    '&::-webkit-scrollbar-thumb': {
                        background: '#d0d5dd',
                        borderRadius: '3px',
                    },
                    '&::-webkit-scrollbar-thumb:hover': {
                        background: '#98a2b3',
                    }
                }}>
                    {jobs.map((job) => {
                        const isSelected = selectedJobId === job.id;
                        return (
                            <ListItem key={job.id} disablePadding sx={{ borderBottom: '1px solid #eaecf0' }}>
                                <ListItemButton
                                    onClick={() => onSelectJob(job.id)}
                                    sx={{
                                        display: 'block',
                                        p: 2,
                                        bgcolor: isSelected ? '#4361ee' : 'white',
                                        '&:hover': {
                                            bgcolor: isSelected ? '#4361ee' : '#f9fafb'
                                        },
                                        transition: 'all 0.2s',
                                    }}
                                >
                                    <Typography
                                        variant="subtitle1"
                                        component="div"
                                        fontWeight="bold"
                                        fontSize={18}
                                        sx={{
                                            color: isSelected ? 'white' : '#4361ee',
                                            mb: 0.5
                                        }}
                                    >
                                        {job.title}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        fontSize={18}
                                        sx={{
                                            color: isSelected ? 'rgba(255,255,255,0.9)' : '#344054',
                                            mb: 0.5
                                        }}
                                    >
                                        {job.company}
                                    </Typography>
                                    <Typography
                                        variant="caption"
                                        display="block"
                                        fontSize={18}
                                        sx={{
                                            color: isSelected ? 'rgba(255,255,255,0.7)' : '#667085'
                                        }}
                                    >
                                        {job.location}
                                    </Typography>
                                </ListItemButton>
                            </ListItem>
                        );
                    })}
                </List>
            </Card>
        </Box>
    );
}
