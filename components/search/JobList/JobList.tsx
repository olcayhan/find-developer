'use client';

import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
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

interface JobListProps {
    jobs: Job[];
    selectedJobId: string | null;
    onSelectJob: (id: string) => void;
}

export default function JobList({ jobs, selectedJobId, onSelectJob }: JobListProps) {
    if (jobs.length === 0) {
        return (
            <Box sx={{ py: 4, textAlign: 'center' }}>
                <Typography variant="h6" color="text.secondary">Eşleşen iş ilanı yok</Typography>
            </Box>
        )
    }

    return (
        <List sx={{ width: '100%', bgcolor: 'background.paper', p: 0 }}>
            <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 2 }}>İlgilenebileceğiniz iş ilanları</Typography>
            {jobs.map((job) => (
                <ListItem key={job.id} disablePadding sx={{ mb: 2 }}>
                    <Card
                        onClick={() => onSelectJob(job.id)}
                        sx={{
                            width: '100%',
                            cursor: 'pointer',
                            border: selectedJobId === job.id ? '2px solid #556cd6' : '1px solid #eee',
                            boxShadow: selectedJobId === job.id ? 3 : 1,
                            transition: 'all 0.2s',
                            '&:hover': {
                                boxShadow: 3
                            }
                        }}
                    >
                        <CardContent>
                            <Typography variant="subtitle1" component="div" fontWeight="bold" color={selectedJobId === job.id ? 'primary' : 'text.primary'}>
                                {job.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {job.company}
                            </Typography>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 1 }}>
                                <Typography variant="caption" color="text.disabled">
                                    {job.location}
                                </Typography>
                                <Typography variant="caption" color="text.disabled">
                                    {job.postedDate ? dayjs(job.postedDate).fromNow() : ''}
                                </Typography>
                            </Box>
                        </CardContent>
                    </Card>
                </ListItem>
            ))}
        </List>
    );
}
