'use client';

import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Link from 'next/link';

export default function Footer() {
    const [language, setLanguage] = React.useState('tr');

    const handleChange = (event: any) => {
        setLanguage(event.target.value);
    };

    return (
        <Box
            component="footer"
            sx={{
                py: 4,
                width: '100%',
                backgroundColor: '#626160',
                color: '#e0e0e0',
                fontSize: '14px',
            }}
        >
            <Container maxWidth="lg">
                <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', alignItems: 'center', mb: 4, gap: 2 }}>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3, alignItems: 'center', justifyContent: { xs: 'center', md: 'flex-start' } }}>
                        <Typography variant="body2" color="inherit">
                            © 2026 Finddeveloper.net
                        </Typography>
                        <Link href="#" style={{ textDecoration: 'none', color: 'inherit', fontSize: '14px' }}>Gizlilik Merkezi</Link>
                        <Link href="#" style={{ textDecoration: 'none', color: 'inherit', fontSize: '14px' }}>Çerezler</Link>
                        <Link href="#" style={{ textDecoration: 'none', color: 'inherit', fontSize: '14px' }}>Gizlilik</Link>
                        <Link href="#" style={{ textDecoration: 'none', color: 'inherit', fontSize: '14px' }}>Şartlar</Link>
                    </Box>

                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3, alignItems: 'center', justifyContent: { xs: 'center', md: 'flex-end' } }}>
                        <Link href="#" style={{ textDecoration: 'none', color: 'inherit', fontSize: '14px' }}>Finddeveloper'da Çalışmak</Link>
                        <Link href="#" style={{ textDecoration: 'none', color: 'inherit', fontSize: '14px' }}>Hakkımızda</Link>
                        <Link href="#" style={{ textDecoration: 'none', color: 'inherit', fontSize: '14px' }}>Yardım Merkezi</Link>
                        <FormControl variant="standard" sx={{ m: 1, minWidth: 80 }}>
                            <Select
                                value={language}
                                onChange={handleChange}
                                disableUnderline
                                sx={{
                                    color: 'inherit',
                                    fontSize: '14px',
                                    '.MuiSelect-icon': { color: 'inherit' },
                                    '& .MuiSelect-select': { paddingRight: '24px !important', paddingLeft: 0, paddingTop: 0, paddingBottom: 0 }
                                }}
                                MenuProps={{
                                    PaperProps: {
                                        sx: {
                                            bgcolor: '#444',
                                            color: '#e0e0e0',
                                            fontSize: '14px',
                                            '& .MuiMenuItem-root': {
                                                fontSize: '14px',
                                                '&:hover': {
                                                    bgcolor: '#555',
                                                },
                                                '&.Mui-selected': {
                                                    bgcolor: '#666',
                                                    '&:hover': {
                                                        bgcolor: '#777',
                                                    },
                                                },
                                            },
                                        },
                                    },
                                }}
                            >
                                <MenuItem value="tr">Türkçe</MenuItem>
                                <MenuItem value="en">English</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                </Box>

                <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'center', gap: 3, borderTop: '1px solid #777', pt: 4 }}>
                    <Box sx={{ width: 80, height: 80, flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <img src="http://www.babuda.com.tr/wp-content/uploads/2018/04/iskur-ozel-istihdam-burosu-300x300.png" alt="ISKUR" style={{ maxWidth: '100%', maxHeight: '100%' }} />
                    </Box>
                    <Typography variant="caption" sx={{ color: '#ccc', textAlign: { xs: 'center', md: 'left' }, lineHeight: 1.6 }}>
                        Finddeveloper.net A.Ş. Özel İstihdam Bürosu Olarak 31/08/2018-30/08/2021 tarihleri arasında faaliyette bulunmak üzere, Türkiye İş Kurumu tarafından 16.07.2018 tarih ve 26124 sayılı karar uyarınca 170 nolu belge ile faaliyet göstermektedir. 4904 sayılı kanun uyarınca iş arayanlardan ücret alınmayacak ve menfaat temin edilmeyecektir. Şikayetleriniz için aşağıdaki telefon numaralarına başvurabilirsiniz. Diğer iller için tıklayın. Türkiye İş Kurumu İstanbul İl Müdürlüğü: 0212 555 55 55 Türkiye iş Kurumu İstanbul Çalışma ve İş Kurumu Ümraniye Hizmet Merkezi :
                        0216 523 90 26
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
}
