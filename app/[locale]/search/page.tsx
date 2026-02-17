'use client';

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import FilterPanel from '../../../components/search/FilterPanel/FilterPanel';
import JobList from '../../../components/search/JobList/JobList';
import JobDetail from '../../../components/search/JobDetail/JobDetail';

// Mock data import workaround
const allJobs = [
    {
        "id": "1",
        "title": "IT Müdürü",
        "company": "Bosch",
        "location": "B/S/H/",
        "type": "Full Time",
        "description": "Information Technology Manager position...",
        "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Bosch-Logo.svg/2560px-Bosch-Logo.svg.png",
        "salary": "20.000 TL - 30.000 TL",
        "qualifications": ["Leadership", "Project Management", "IT Infrastructure"]
    },
    {
        "id": "2",
        "title": "Front-end Developer",
        "company": "Aktif Bank",
        "location": "Aktif Bank Genel Müdürlük",
        "type": "Full Time",
        "description": "Experienced Front-end Developer needed...",
        "logo": "https://upload.wikimedia.org/wikipedia/commons/4/4e/Aktif_Bank_logo.png",
        "salary": "15.000 TL - 25.000 TL",
        "qualifications": ["React", "JavaScript", "HTML/CSS"]
    },
    {
        "id": "3",
        "title": "Back-end Developer",
        "company": "Akbank",
        "location": "Akbank Bank Genel Müdürlük",
        "type": "Full Time",
        "description": "Backend Developer with Java experience...",
        "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Akbank_logo.svg/1200px-Akbank_logo.svg.png",
        "salary": "18.000 TL - 28.000 TL",
        "qualifications": ["Java", "Spring Boot", "SQL"]
    },
    {
        "id": "4",
        "title": ".net Developer",
        "company": "Arçelik",
        "location": "Arçelik",
        "type": "Full Time",
        "description": ".NET Core developer...",
        "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Arcelik_Logo.svg/2560px-Arcelik_Logo.svg.png",
        "salary": "16.000 TL - 26.000 TL",
        "qualifications": [".NET Core", "C#", "Azure"]
    },
    {
        "id": "5",
        "title": "Junior .net Developer",
        "company": "Allianz",
        "location": "Allianz",
        "type": "Full Time",
        "description": "Junior developer role...",
        "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Allianz_logo.svg/2560px-Allianz_logo.svg.png",
        "salary": "10.000 TL - 15.000 TL",
        "qualifications": [".NET", "C#"]
    },
    {
        "id": "6",
        "title": "Sales Manager",
        "company": "Bezmialem Vakıf Üniversitesi",
        "location": "Bezmialem",
        "type": "Full Time",
        "description": "Sales manager for university...",
        "logo": "https://bezmialem.edu.tr/assets/images/logo.png",
        "salary": "12.000 TL - 18.000 TL",
        "qualifications": ["Sales", "Communication"]
    }
];

export default function SearchPage() {
    const searchParams = useSearchParams();
    const query = searchParams.get('q') || '';
    const [selectedJobId, setSelectedJobId] = useState<string | null>(null);

    const filteredJobs = React.useMemo(() => {
        if (!query) return allJobs;
        const lowerQuery = query.toLowerCase();
        return allJobs.filter(job =>
            job.title.toLowerCase().includes(lowerQuery) ||
            job.company.toLowerCase().includes(lowerQuery) ||
            job.location.toLowerCase().includes(lowerQuery)
        );
    }, [query]);

    // Select first job by default if list changes
    useEffect(() => {
        if (filteredJobs.length > 0) {
            // Only select if we don't have a selection, OR if the current selection is not in the new list
            const isSelectedInList = filteredJobs.find(j => j.id === selectedJobId);

            if (!selectedJobId || !isSelectedInList) {
                setSelectedJobId(filteredJobs[0].id);
            }
        } else {
            // If filteredJobs becomes empty, clear the selection
            setSelectedJobId(null);
        }
    }, [filteredJobs, selectedJobId]);

    const selectedJob = allJobs.find(job => job.id === selectedJobId) || null;

    return (
        <Box sx={{ py: 4, bgcolor: '#f5f5f5', minHeight: 'calc(100vh - 64px)' }}>
            <Container maxWidth="xl">
                <FilterPanel jobCount={filteredJobs.length} query={query} />

                <Grid container spacing={3}>
                    <Grid size={{ xs: 12, md: 4 }}>
                        <JobList jobs={filteredJobs} selectedJobId={selectedJobId} onSelectJob={setSelectedJobId} />
                    </Grid>
                    <Grid size={{ xs: 12, md: 8 }} sx={{ display: { xs: 'none', md: 'block' } }}>
                        <JobDetail job={selectedJob} />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}
