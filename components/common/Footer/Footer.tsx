'use client';

import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Link from 'next/link';

export default function Footer() {
    return (
        <Box
            component="footer"
            sx={{
                py: 6,
                px: 2,
                mt: 'auto',
                backgroundColor: '#333',
                color: 'white',
            }}
        >
            <Container maxWidth="lg">
                <Grid container spacing={4}>
                    <Grid size={{ xs: 12, md: 3 }}>
                        <Typography variant="h6" gutterBottom>
                            Popüler Kategoriler
                        </Typography>
                        <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
                            <li><Link href="#">Yazılım Geliştirme</Link></li>
                            <li><Link href="#">Mobil Uygulama</Link></li>
                            <li><Link href="#">Kullanıcı Deneyimi</Link></li>
                        </Box>
                    </Grid>
                    <Grid size={{ xs: 12, md: 3 }}>
                        <Typography variant="h6" gutterBottom>
                            Popüler Başlıklar
                        </Typography>
                        <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
                            <li><Link href="#">Senior .net Developer</Link></li>
                            <li><Link href="#">Senior Mobile Developer</Link></li>
                        </Box>
                    </Grid>
                    <Grid size={{ xs: 12, md: 3 }}>
                        <Typography variant="h6" gutterBottom>
                            Popüler Lokasyonlar
                        </Typography>
                        <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
                            <li><Link href="#">İstanbul</Link></li>
                            <li><Link href="#">İzmir</Link></li>
                            <li><Link href="#">Ankara</Link></li>
                        </Box>
                    </Grid>
                    <Grid size={{ xs: 12, md: 3 }}>
                        <Typography variant="h6" gutterBottom>
                            Popüler Şirket İlanları
                        </Typography>
                        <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
                            <li><Link href="#">Koç Sistem</Link></li>
                            <li><Link href="#">Aktif Bank</Link></li>
                        </Box>
                    </Grid>
                </Grid>
                <Box sx={{ mt: 5, pt: 3, borderTop: '1px solid #555', textAlign: 'center', fontSize: '0.875rem', color: '#aaa' }}>
                    © 2026 Finddeveloper.net | Gizlilik Merkezi | Çerezler | Gizlilik | Şartlar
                </Box>
            </Container>
        </Box>
    );
}
