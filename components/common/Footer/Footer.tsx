'use client';

import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { useTranslations, useLocale } from 'next-intl';
import { Link, useRouter, usePathname } from '../../../navigation';

export default function Footer() {
    const t = useTranslations('Footer');
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();

    const handleChange = (event: any) => {
        const nextLocale = event.target.value;
        router.replace(pathname, { locale: nextLocale });
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
                            {t('copyright')}
                        </Typography>
                        <Link href="#" style={{ textDecoration: 'none', color: 'inherit', fontSize: '14px' }}>{t('privacyCenter')}</Link>
                        <Link href="#" style={{ textDecoration: 'none', color: 'inherit', fontSize: '14px' }}>{t('cookies')}</Link>
                        <Link href="#" style={{ textDecoration: 'none', color: 'inherit', fontSize: '14px' }}>{t('privacy')}</Link>
                        <Link href="#" style={{ textDecoration: 'none', color: 'inherit', fontSize: '14px' }}>{t('terms')}</Link>
                    </Box>

                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3, alignItems: 'center', justifyContent: { xs: 'center', md: 'flex-end' } }}>
                        <Link href="#" style={{ textDecoration: 'none', color: 'inherit', fontSize: '14px' }}>{t('workWithUs')}</Link>
                        <Link href="#" style={{ textDecoration: 'none', color: 'inherit', fontSize: '14px' }}>{t('aboutUs')}</Link>
                        <Link href="#" style={{ textDecoration: 'none', color: 'inherit', fontSize: '14px' }}>{t('helpCenter')}</Link>
                        <FormControl variant="standard" sx={{ m: 1, minWidth: 80 }}>
                            <Select
                                value={locale}
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
                        {t('legalText')}
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
}
