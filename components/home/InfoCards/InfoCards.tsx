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
                                height="250"
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
                                    backgroundImage: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'end'
                                }}
                            >
                                <Typography variant="h5" color="white" fontWeight="bold">
                                    İş Ara
                                </Typography>
                            </Box>
                        </Card>
                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Card sx={{ position: 'relative', borderRadius: 4, overflow: 'hidden', boxShadow: 3 }}>
                            <CardMedia
                                component="img"
                                height="250"
                                image="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80" // Placeholder
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
                                    backgroundImage: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'end'
                                }}
                            >
                                <Typography variant="h5" color="white" fontWeight="bold">
                                    Profilini Oluştur
                                </Typography>
                            </Box>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}
