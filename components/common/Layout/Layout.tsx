'use client';

import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Box from '@mui/material/Box';

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Header />
            <Box component="main" sx={{ flexGrow: 1 }}>
                {children}
            </Box>
            <Footer />
        </Box>
    );
}
