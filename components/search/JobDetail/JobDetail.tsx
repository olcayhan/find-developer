'use client';

import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareIcon from '@mui/icons-material/Share';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Divider from '@mui/material/Divider';

interface Job {
    id: string;
    title: string;
    company: string;
    location: string;
    type: string;
    description: string;
    salary?: string;
    qualifications?: string[];
}

interface JobDetailProps {
    job: Job | null;
}

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ py: 3 }}>
                    {children}
                </Box>
            )}
        </div>
    );
}

export default function JobDetail({ job }: JobDetailProps) {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    if (!job) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', minHeight: '300px', color: 'text.secondary' }}>
                <Typography>Bir ilan seçin</Typography>
            </Box>
        )
    }

    return (
        <Card sx={{ height: '100%', boxShadow: 3, borderRadius: 2 }}>
            <CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                    <Box>
                        <Typography variant="h5" component="div" fontWeight="bold" color="primary">
                            {job.title}
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary">
                            {job.company} - {job.location}
                        </Typography>
                    </Box>
                    <Box>
                        <Button variant="outlined" sx={{ borderRadius: '20px', mr: 1, textTransform: 'none' }}>
                            Başvur
                        </Button>
                        <IconButton size="small"><FavoriteBorderIcon /></IconButton>
                        <IconButton size="small"><ShareIcon /></IconButton>
                    </Box>
                </Box>

                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="job detail tabs" variant="scrollable" scrollButtons="auto">
                        <Tab label="Detay" />
                        <Tab label="Aday Kriterleri" />
                        <Tab label="İşe Alım Süreci" />
                    </Tabs>
                </Box>

                <CustomTabPanel value={value} index={0}>
                    <Typography variant="body2" paragraph>
                        {job.description}
                    </Typography>

                    <Typography variant="subtitle2" fontWeight="bold" gutterBottom sx={{ mt: 2 }}>
                        Genel Nitelikler
                    </Typography>
                    <Box component="ul" sx={{ pl: 2, m: 0 }}>
                        {job.qualifications?.map((q, i) => (
                            <li key={i}><Typography variant="body2">{q}</Typography></li>
                        )) || <li>Loading...</li>}
                    </Box>
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                    <Typography variant="body2">Aday kriterleri içeriği...</Typography>
                </CustomTabPanel>
                <CustomTabPanel value={value} index={2}>
                    <Typography variant="body2">İşe alım süreci içeriği...</Typography>
                </CustomTabPanel>

                <Divider sx={{ my: 3 }} />

                <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                    <Box sx={{ flex: 1, minWidth: '200px', p: 2, bgcolor: '#f9f9f9', borderRadius: 2 }}>
                        <Typography variant="subtitle2" fontWeight="bold" color="primary">Bu İlana Uygun muyum?</Typography>
                        <Typography variant="caption" display="block" color="text.secondary">Bu ilanla eşleşmek için ne yapmalıyım?</Typography>
                        <Typography variant="caption" sx={{ textDecoration: 'underline', cursor: 'pointer', mt: 1, display: 'block' }}>CV&apos;nizi Güncelleyin</Typography>
                    </Box>
                    <Box sx={{ flex: 1, minWidth: '200px', p: 2, bgcolor: '#f9f9f9', borderRadius: 2 }}>
                        <Typography variant="subtitle2" fontWeight="bold" color="primary">Tahmini Maaş Aralığı</Typography>
                        <Typography variant="body2" fontWeight="bold">{job.salary || 'Belirtilmemiş'}</Typography>
                        <Typography variant="caption" color="text.secondary">/yıl</Typography>
                    </Box>
                </Box>

            </CardContent>
        </Card>
    );
}
