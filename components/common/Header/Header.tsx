'use client';

import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Link from 'next/link';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Container from '@mui/material/Container';
import { usePathname } from 'next/navigation';

export default function Header() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const pathname = usePathname();
    const isHome = pathname === '/';

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const navItems = [
        { label: 'Kayıt Ol', href: '/register', variant: 'outlined' as const },
        { label: 'Giriş Yap', href: '/login', variant: 'outlined' as const },
    ];

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                Find Developer
            </Typography>
            <List>
                {navItems.map((item) => (
                    <ListItem key={item.label} disablePadding>
                        <ListItemButton sx={{ textAlign: 'center' }} component={Link} href={item.href}>
                            <ListItemText primary={item.label} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar
                position={isHome ? "absolute" : "static"}
                color="default"
                elevation={isHome ? 0 : 1}
                sx={{
                    bgcolor: isHome ? 'transparent' : 'white',
                    borderBottom: isHome ? 'none' : undefined,
                    zIndex: (theme) => theme.zIndex.drawer + 1
                }}
            >
                <Container maxWidth="lg">
                    <Toolbar disableGutters>
                        {!isHome ? (
                            <Typography
                                variant="h6"
                                component={Link}
                                href="/"
                                sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'primary.main', fontWeight: 'bold', fontSize: '1.5rem' }}
                            >
                                find<Box component="span" sx={{ color: '#556cd6' }}>developer.net</Box>
                            </Typography>
                        ) : (
                            <Box sx={{ flexGrow: 1 }} />
                        )}

                        {isMobile ? (
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                edge="start"
                                onClick={handleDrawerToggle}
                            >
                                <MenuIcon />
                            </IconButton>
                        ) : (
                            <Box>
                                {navItems.map((item) => (
                                    <Button
                                        key={item.label}
                                        component={Link}
                                        href={item.href}
                                        variant={item.variant}
                                        sx={{
                                            ml: 2,
                                            borderRadius: '20px',
                                            textTransform: 'none',
                                            px: 3,
                                            // On home, make it white text and border
                                            color: isHome ? 'white' : 'primary.main',
                                            borderColor: isHome ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.12)',
                                            bgcolor: 'transparent',
                                            '&:hover': {
                                                bgcolor: isHome ? 'rgba(255,255,255,0.1)' : undefined,
                                                borderColor: isHome ? 'white' : undefined,
                                            }
                                        }}
                                    // Override color prop to avoid conflict/defaults
                                    >
                                        {item.label}
                                    </Button>
                                ))}
                            </Box>
                        )}
                    </Toolbar>
                </Container>
            </AppBar>
            <nav>
                <Drawer
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', md: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
                    }}
                >
                    {drawer}
                </Drawer>
            </nav>
        </Box>
    );
}
