'use client';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Link from 'next/link';

import { useTranslations } from 'next-intl';

const jobCategories = [
    'Yazılım Geliştirme',
    'Mobil Uygulama Geliştirme',
    'Kullanıcı Deneyimi',
    'Kullanılabilirlik',
    'Proje Yönetimi',
    'İş Analizi',
    'Raporlama Uzmanı',
    'Test Uzmanı',
    'Yazılım Mimarı',
    'Arayüz Tasarımı'
];

const popularTitles = [
    'Senior .net Developer',
    'Senior Mobile Developer',
    'Kullanıcı Deneyimi Tasarımcısı',
    'Kullanılabilirlik Uzmanı',
    'IT Sorumlusu',
    'Mid Level .net Developer'
];

const popularLocations = [
    'İstanbul',
    'İzmir',
    'Ankara'
];

const popularCompanies = [
    'Koç Sistem',
    'Aktif Bank',
    'Akbank',
    'Türk Hava Yolları',
    'Brisa',
    'Vakıfbank',
    'Neyasis Tech.'
];

export default function JobsForYou() {
    const t = useTranslations('JobsForYou');

    return (
        <Box sx={{ py: 6, position: 'relative', overflow: 'hidden' }}>
            <Box
                sx={{
                    position: 'absolute',
                    top: -50,
                    left: -100,
                    width: '600px',
                    height: '600px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(233,236,255,0.8) 0%, rgba(255,255,255,0) 70%)',
                    zIndex: -1,
                    opacity: 0.5
                }}
            />
            <Box
                sx={{
                    position: 'absolute',
                    top: 100,
                    left: -50,
                    width: '400px',
                    height: '400px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(255,240,245,0.8) 0%, rgba(255,255,255,0) 70%)',
                    zIndex: -2,
                    opacity: 0.5
                }}
            />

            <Container maxWidth="lg">
                <Typography variant="h5" color="text.secondary" sx={{ mb: 4, fontWeight: 'bold', fontSize: '24px' }}>
                    {t('title')}
                </Typography>

                <Grid container spacing={4}>
                    {/* Popüler Kategoriler */}
                    <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                        <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 2, fontWeight: 'bold', fontSize: '20px' }}>
                            {t('categories')}
                        </Typography>
                        <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
                            {jobCategories.map((item, index) => (
                                <Box component="li" key={index} sx={{ mb: 1 }}>
                                    <Link href="#" style={{ textDecoration: 'none' }}>
                                        <Typography variant="body2" color="text.secondary" sx={{ '&:hover': { color: 'primary.main', textDecoration: 'underline' }, fontSize: '16px' }}>
                                            {item}
                                        </Typography>
                                    </Link>
                                </Box>
                            ))}
                        </Box>
                    </Grid>

                    <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                        <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 2, fontWeight: 'bold', fontSize: '20px' }}>
                            {t('titles')}
                        </Typography>
                        <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
                            {popularTitles.map((item, index) => (
                                <Box component="li" key={index} sx={{ mb: 1 }}>
                                    <Link href="#" style={{ textDecoration: 'none' }}>
                                        <Typography variant="body2" color="text.secondary" sx={{ '&:hover': { color: 'primary.main', textDecoration: 'underline' }, fontSize: '16px' }}>
                                            {item}
                                        </Typography>
                                    </Link>
                                </Box>
                            ))}
                        </Box>
                    </Grid>

                    <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                        <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 2, fontWeight: 'bold', fontSize: '20px' }}>
                            {t('locations')}
                        </Typography>
                        <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
                            {popularLocations.map((item, index) => (
                                <Box component="li" key={index} sx={{ mb: 1 }}>
                                    <Link href="#" style={{ textDecoration: 'none' }}>
                                        <Typography variant="body2" color="text.secondary" sx={{ '&:hover': { color: 'primary.main', textDecoration: 'underline' }, fontSize: '16px' }}>
                                            {item}
                                        </Typography>
                                    </Link>
                                </Box>
                            ))}
                        </Box>
                    </Grid>

                    <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                        <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 2, fontWeight: 'bold', fontSize: '20px' }}>
                            {t('companies')}
                        </Typography>
                        <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
                            {popularCompanies.map((item, index) => (
                                <Box component="li" key={index} sx={{ mb: 1 }}>
                                    <Link href="#" style={{ textDecoration: 'none' }}>
                                        <Typography variant="body2" color="text.secondary" sx={{ '&:hover': { color: 'primary.main', textDecoration: 'underline' }, fontSize: '16px' }}>
                                            {item}
                                        </Typography>
                                    </Link>
                                </Box>
                            ))}
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}
