'use client';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function InfoCards() {
    return (
        <Box sx={{ py: { xs: 4, sm: 6 } }}>
            <Container maxWidth="lg">
                <Grid container spacing={{ xs: 2, md: 4 }}>
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Card sx={{ position: 'relative', borderRadius: 4, overflow: 'hidden', boxShadow: 3 }}>
                            <CardMedia
                                component="img"
                                height="325"
                                image="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80" // Placeholder
                                alt="İş Ara"
                                sx={{ filter: 'brightness(0.7)' }}
                            />
                            <Box
                                sx={{
                                    position: 'absolute',
                                    bottom: 0,
                                    left: 0,
                                    width: '100%',
                                    p: 3,
                                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                                    display: 'flex',
                                    justifyContent: 'space-evenly',
                                    alignItems: 'center'
                                }}
                            >
                                <Typography variant="h5" color="white" sx={{ flex: 1, textAlign: 'center', fontSize: 18 }}>
                                    İş Ara
                                </Typography>
                                <Box sx={{ width: '2px', height: 24, bgcolor: 'rgba(255, 255, 255, 1)' }} />
                                <Typography variant="h5" color="white" sx={{ flex: 1, textAlign: 'center', fontSize: 18 }}>
                                    Profilini Oluştur
                                </Typography>

                            </Box>
                        </Card>
                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Card sx={{ position: 'relative', borderRadius: 4, overflow: 'hidden', boxShadow: 3 }}>
                            <CardMedia
                                component="img"
                                height="325"
                                image="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80"
                                alt="Profilini Oluştur"
                                sx={{ filter: 'brightness(0.7)' }}
                            />
                            <Box
                                sx={{
                                    position: 'absolute',
                                    bottom: 0,
                                    left: 0,
                                    width: '100%',
                                    p: 3,
                                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}
                            >
                                <Typography variant="h5" color="white" fontSize={18}>
                                    İş Veren Çözümleri
                                </Typography>
                            </Box>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}
