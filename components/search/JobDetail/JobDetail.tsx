'use client';

import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareIcon from '@mui/icons-material/Share';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Divider from '@mui/material/Divider';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';

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
            style={{ height: '100%' }}
        >
            {value === index && (
                <Box sx={{ py: 3, height: '100%', overflowY: 'auto', pr: 1 }}>
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
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, height: '100%' }}>
            {/* Top Header Card */}
            <Card sx={{ p: 3, borderRadius: 2, boxShadow: '0 4px 20px rgba(0,0,0,0.05)', border: '1px solid #eee' }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <Box>
                        <Typography variant="h6" component="div" fontWeight="bold" sx={{ color: '#4361ee', mb: 0.5 }}>
                            {job.title}
                        </Typography>
                        <Typography variant="body1" color="text.secondary" fontWeight="500">
                            {job.company} - {job.location}
                        </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 1 }}>
                        <Button
                            variant="outlined"
                            sx={{
                                borderRadius: '25px',
                                textTransform: 'none',
                                borderColor: '#4361ee',
                                color: '#4361ee',
                                px: 4,
                                py: 0.5,
                                fontSize: '1rem',
                                '&:hover': {
                                    borderColor: '#4361ee',
                                    bgcolor: 'rgba(67, 97, 238, 0.04)'
                                }
                            }}
                        >
                            Başvur
                        </Button>
                        <Box sx={{ display: 'flex', gap: 1 }}>
                            <IconButton size="small" sx={{ color: '#4361ee' }}><FavoriteBorderIcon /></IconButton>
                            <IconButton size="small" sx={{ color: '#4361ee' }}><ShareIcon /></IconButton>
                        </Box>
                    </Box>
                </Box>
            </Card>

            {/* Main Content Area */}
            {/* Tabs are outside the card in the design, acting as headers for the content card */}
            <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 0 }}>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        aria-label="job detail tabs"
                        sx={{
                            '& .MuiTab-root': {
                                textTransform: 'none',
                                fontWeight: 600,
                                fontSize: '1rem',
                                color: 'text.secondary',
                                '&.Mui-selected': { color: '#4361ee' }
                            },
                            '& .MuiTabs-indicator': {
                                backgroundColor: '#4361ee',
                                height: 3
                            }
                        }}
                    >
                        <Tab label="Detay" />
                        <Tab label="Aday Kriterleri" />
                        <Tab label="İşe Alım Süreci" />
                    </Tabs>
                </Box>

                <Card sx={{
                    p: 4,
                    pt: 2,
                    borderRadius: '0 0 12px 12px',
                    border: '1px solid #eee',
                    borderTop: 'none',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                    flex: 1,
                    minHeight: 400
                }}>
                    <CustomTabPanel value={value} index={0}>
                        {/* Job Description */}
                        <Typography variant="body2" color="text.secondary" paragraph sx={{ mb: 3 }}>
                            Promer Müşavirlik Mühendislik A.Ş Bilgi Teknolojileri Direktörlüğünün Yazılım Geliştirme Biriminde görev alacak Software Developer(.Net) arayışımız vardır.
                        </Typography>

                        <Typography variant="subtitle1" fontWeight="bold" sx={{ color: '#556987', mb: 2 }}>
                            İş Tanımı
                        </Typography>
                        <Typography variant="body2" color="text.secondary" paragraph sx={{ mb: 4, whiteSpace: 'pre-line' }}>
                            {job.description}
                        </Typography>

                        <Typography variant="subtitle1" fontWeight="bold" sx={{ color: '#556987', mb: 2 }}>
                            Genel Nitelikler
                        </Typography>
                        <Typography variant="body2" color="text.secondary" paragraph>
                            Üniversitelerin Bilgisayar Mühendisliği veya ilgili mühendislik bölümlerinden mezun,
                        </Typography>
                        <Box component="ul" sx={{ pl: 2, m: 0, color: 'text.secondary' }}>
                            {job.qualifications?.map((q, i) => (
                                <li key={i}><Typography variant="body2" sx={{ mb: 0.5 }}>{q}</Typography></li>
                            )) || <li>Detaylar yükleniyor...</li>}
                        </Box>
                    </CustomTabPanel>
                    <CustomTabPanel value={value} index={1}>
                        <Typography variant="body2">Aday kriterleri içeriği...</Typography>
                    </CustomTabPanel>
                    <CustomTabPanel value={value} index={2}>
                        <Typography variant="body2">İşe alım süreci içeriği...</Typography>
                    </CustomTabPanel>
                </Card>
            </Box>

            {/* Bottom Info Cards */}
            <Box sx={{ display: 'flex', gap: 3 }}>
                {/* "Am I suitable?" Card */}
                <Card sx={{ flex: 1, p: 3, borderRadius: 2, boxShadow: '0 4px 20px rgba(0,0,0,0.05)', border: '1px solid #eee', position: 'relative', overflow: 'hidden' }}>
                    <Box sx={{ position: 'relative', zIndex: 1 }}>
                        <Typography variant="h6" fontWeight="bold" sx={{ color: '#4361ee', mb: 1 }}>
                            Bu İlana Uygun muyum?
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                            Bu ilanla eşleşmek için ne yapmalıyım?
                        </Typography>
                        <Typography variant="body2" sx={{ textDecoration: 'underline', cursor: 'pointer', fontWeight: 600, color: '#556987' }}>
                            CV'nizi Güncelleyin
                        </Typography>
                    </Box>
                    <DescriptionOutlinedIcon sx={{
                        position: 'absolute',
                        right: -10,
                        bottom: -10,
                        fontSize: 100,
                        color: '#eaecf0',
                        transform: 'rotate(-15deg)'
                    }} />
                </Card>

                {/* Salary Card */}
                <Card sx={{ flex: 1, p: 3, borderRadius: 2, boxShadow: '0 4px 20px rgba(0,0,0,0.05)', border: '1px solid #eee', position: 'relative', overflow: 'hidden' }}>
                    <Box sx={{ position: 'relative', zIndex: 1 }}>
                        <Typography variant="h6" fontWeight="bold" sx={{ color: '#4361ee', mb: 1 }}>
                            Tahmini Maaş Aralığı
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ mb: 0 }}>
                            {job.salary || '8.000€ - 12.000,00€'}
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                            /yıl
                        </Typography>
                        <Typography variant="caption" display="block" color="text.secondary" sx={{ mt: 0.5 }}>
                            .net Developer
                        </Typography>
                    </Box>
                    <MonetizationOnOutlinedIcon sx={{
                        position: 'absolute',
                        right: -10,
                        bottom: -10,
                        fontSize: 100,
                        color: '#eaecf0',
                        transform: 'rotate(-15deg)'
                    }} />
                </Card>
            </Box>
        </Box>
    );
}
