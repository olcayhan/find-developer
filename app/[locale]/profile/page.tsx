'use client';

import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ProfileSidebar from '../../../components/profile/ProfileSidebar/ProfileSidebar';
import ExperienceSection from '../../../components/profile/ExperienceSection/ExperienceSection';
import SkillsSection from '../../../components/profile/SkillsSection/SkillsSection';
import EducationSection from '../../../components/profile/EducationSection/EducationSection';
import InterestsSection from '../../../components/profile/InterestsSection/InterestsSection';
import Divider from '@mui/material/Divider';

const user = {
    "name": "Nesil AKSOY",
    "title": "UX Designer",
    "location": "Türkiye, İstanbul, Sarıyer",
    "email": "eray_karakullukcu@neyasis.com",
    "phone": "+90 555 66 44",
    "website": "https://neyasis.com",
    "social": {
        "linkedin": "#",
        "github": "#",
        "twitter": "#"
    },
    "documents": [
        { "name": "eraycv.docx", "type": "docx" },
        { "name": "eraycv-eng.pdf", "type": "pdf" }
    ],
    "professionalView": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    "experience": [
        {
            "title": "Founder",
            "company": "Neyasis Technology",
            "date": "February 2014 - Present",
            "duration": "6 Years, 10 Months",
            "location": "Ümraniye - İstanbul / Turkey",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."
        },
        {
            "title": "Software Development Manager",
            "company": "IBM",
            "date": "July 2011 - January 2014",
            "duration": "2 Years, 6 Months",
            "location": "Armonk - New York / ABD",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."
        }
    ],
    "education": [
        {
            "school": "Bahçeşehir Üniversitesi",
            "degree": "Master Degree",
            "field": "Computer & Information Sciences",
            "date": "2015-2019"
        },
        {
            "school": "Boğaziçi Üniversitesi",
            "degree": "Bachelor's Degree",
            "field": "Political Science and International Relations",
            "date": "2010-2015"
        }
    ],
    "skills": [
        { "name": "C#.Net", "years": 10 },
        { "name": "React", "years": 3 },
        { "name": "Swift", "years": 5 }
    ],
    "interests": ["Boating / Sailing", "Windsurfing", "Snowboarding"]
};

export default function ProfilePage() {
    return (
        <Box sx={{ py: 4, bgcolor: '#fbfbfb', minHeight: 'calc(100vh - 64px)' }}>
            <Container maxWidth="lg">
                <Grid container spacing={4}>
                    {/* Sidebar */}
                    <Grid size={{ xs: 12, md: 3 }}>
                        <ProfileSidebar user={user} />
                    </Grid>

                    {/* Main Content */}
                    <Grid size={{ xs: 12, md: 9 }}>
                        <Typography variant="h5" color="text.secondary" sx={{ mb: 3 }}>Profil</Typography>

                        {/* Professional View */}
                        <Box sx={{ mb: 4 }}>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                                <Typography variant="h6" fontWeight="bold" color="primary">Profesyonel Bakış</Typography>
                                <Button size="small" sx={{ textTransform: 'none', color: 'text.secondary' }}>Düzenle</Button>
                            </Box>
                            <Divider sx={{ mb: 2 }} />
                            <Typography variant="body2" color="text.secondary">
                                {user.professionalView}
                            </Typography>
                        </Box>

                        <ExperienceSection experiences={user.experience} />
                        <EducationSection education={user.education} />

                        <Typography variant="h6" fontWeight="bold" color="text.secondary" sx={{ mb: 2 }}>Sertifikalar</Typography>
                        <Box sx={{ mb: 4 }}>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                                <Typography variant="subtitle1" fontWeight="bold" color="primary">MCP (Microsoft Certified Professional)</Typography>
                                <Button size="small" sx={{ textTransform: 'none', color: 'text.secondary' }}>Düzenle</Button>
                            </Box>
                            <Divider sx={{ mb: 2 }} />
                            <Typography variant="body2" color="text.secondary">Microsoft</Typography>
                            <Typography variant="caption" color="text.secondary">January 2015</Typography>
                        </Box>

                        <SkillsSection skills={user.skills} />
                        <InterestsSection interests={user.interests} />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}
