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
import { Link, usePathname } from '../../../navigation';
import { useTranslations } from 'next-intl';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';

export default function Header() {
    const t = useTranslations('Hero');
    const tProfile = useTranslations('Profile');
    const tHeader = useTranslations('Header');
    const [mobileOpen, setMobileOpen] = useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const pathname = usePathname();
    const isHome = pathname === '/';
    const isProfile = pathname.includes('/profile');
    const isSearch = pathname.includes('/search');

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

    if (isProfile || isSearch) {
        return (
            <Box sx={{ flexDirection: 'column', width: '100%' }}>
                <Box sx={{ bgcolor: '#4361ee', position: 'relative', height: '80px', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
                    <Container sx={{ px: { xs: 2, md: '150px !important' }, maxWidth: 'none !important', position: 'relative', zIndex: 1, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>

                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                            <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
                                <Box
                                    component="img"
                                    src="/assets/images/logo.webp"
                                    alt="Logo"
                                    width={190}
                                    height={26}
                                />
                            </Link>

                            {isSearch && (
                                <Button
                                    variant="outlined"
                                    sx={{
                                        color: 'white',
                                        borderColor: 'rgba(255,255,255,0.8)',
                                        borderRadius: '20px',
                                        textTransform: 'none',
                                        height: 32,
                                        px: 3,
                                        '&:hover': {
                                            borderColor: 'white',
                                            bgcolor: 'rgba(255,255,255,0.1)'
                                        }
                                    }}
                                >
                                    {tHeader('employerLogin')}
                                </Button>
                            )}
                        </Box>

                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                            {isProfile ? (
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                    <Box sx={{ textAlign: 'right', color: 'white' }}>
                                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: 0.5 }}>
                                            <Typography variant="body2" fontWeight="bold">Eray Karakullukçu</Typography>
                                            <KeyboardArrowDownIcon fontSize="small" />
                                        </Box>
                                        <Typography variant="caption" sx={{ opacity: 0.8 }}>{tProfile('founderAt')}</Typography>
                                    </Box>
                                    <Avatar src="https://i.pravatar.cc/150?u=5" sx={{ width: 48, height: 48, border: '2px solid white' }} />
                                </Box>
                            ) : (
                                <>
                                    <Button
                                        variant="outlined"
                                        sx={{
                                            color: 'white',
                                            borderColor: 'rgba(255,255,255,0.8)',
                                            borderRadius: '20px',
                                            textTransform: 'none',
                                            height: 32,
                                            px: 3,
                                            '&:hover': {
                                                borderColor: 'white',
                                                bgcolor: 'rgba(255,255,255,0.1)'
                                            }
                                        }}
                                    >
                                        {tHeader('uploadCV')}
                                    </Button>
                                    <Button
                                        component={Link}
                                        href="/login"
                                        variant="outlined"
                                        sx={{
                                            color: 'white',
                                            borderColor: 'rgba(255,255,255,0.8)',
                                            borderRadius: '20px',
                                            textTransform: 'none',
                                            height: 32,
                                            px: 3,
                                            '&:hover': {
                                                borderColor: 'white',
                                                bgcolor: 'rgba(255,255,255,0.1)'
                                            }
                                        }}
                                    >
                                        {tHeader('login')}
                                    </Button>
                                </>
                            )}
                        </Box>
                    </Container>
                </Box>

                <Box sx={{ bgcolor: '#f5f7fa', py: 2, borderBottom: '1px solid #e0e0e0' }}>
                    <Container sx={{ px: { xs: 2, md: '150px !important' }, maxWidth: 'none !important', display: 'flex', gap: 2 }}>
                        <Paper
                            component="form"
                            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', flexGrow: 1, borderRadius: '30px', border: '1px solid #4361ee', boxShadow: 'none', height: 50 }}
                        >
                            <IconButton sx={{ p: '10px', color: '#666' }} aria-label="search">
                                <SearchIcon />
                            </IconButton>
                            <InputBase
                                sx={{ ml: 1, flex: 1, color: '#666' }}
                                placeholder={t('placeholder')}
                                inputProps={{ 'aria-label': 'search jobs' }}
                            />
                        </Paper>
                        <Button
                            variant="outlined"
                            sx={{
                                borderRadius: '30px',
                                px: 5,
                                borderColor: '#4361ee',
                                color: '#4361ee',
                                textTransform: 'none',
                                fontSize: '1.2rem',
                                fontWeight: 'bold',
                                bgcolor: 'white',
                                '&:hover': { bgcolor: '#f0f4ff', borderColor: '#4361ee' }
                            }}
                        >
                            <Box
                                component="img"
                                src="/assets/images/find-text.webp"
                                alt="Logo"
                                width={60}
                                height={25}
                            />
                        </Button>
                    </Container>
                </Box>
            </Box>
        );
    }

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
                        <Box sx={{ flexGrow: 1 }}>
                            {!isHome && (
                                <Typography
                                    variant="h6"
                                    component={Link}
                                    href="/"
                                    sx={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'primary.main', fontWeight: 'bold', fontSize: '1.5rem' }}
                                >
                                    find<Box component="span" sx={{ color: '#556cd6' }}>developer.net</Box>
                                </Typography>
                            )}
                        </Box>

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
                                            color: isHome ? 'white' : 'primary.main',
                                            borderColor: isHome ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.12)',
                                            bgcolor: 'transparent',
                                            '&:hover': {
                                                bgcolor: isHome ? 'rgba(255,255,255,0.1)' : undefined,
                                                borderColor: isHome ? 'white' : undefined,
                                            }
                                        }}
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
                        keepMounted: true,
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
