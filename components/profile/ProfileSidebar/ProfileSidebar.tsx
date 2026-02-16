'use client';

import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import Link from '@mui/material/Link';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import DescriptionIcon from '@mui/icons-material/Description';
import DeleteIcon from '@mui/icons-material/Delete';
import Divider from '@mui/material/Divider';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';

interface User {
    name: string;
    title: string;
    location: string;
    email: string;
    phone: string;
    documents: { name: string; type: string }[];
}

export default function ProfileSidebar({ user }: { user: User }) {
    return (
        <Box sx={{ bgcolor: 'white', p: 3, borderRadius: 2, boxShadow: 1 }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 3, position: 'relative' }}>
                <Box sx={{ position: 'relative' }}>
                    <Avatar sx={{ width: 100, height: 100, bgcolor: 'primary.light' }} />
                    <IconButton
                        size="small"
                        sx={{ position: 'absolute', bottom: 0, right: 0, bgcolor: 'primary.main', color: 'white', '&:hover': { bgcolor: 'primary.dark' } }}
                    >
                        <EditIcon fontSize="small" />
                    </IconButton>
                </Box>
                <Typography variant="h6" fontWeight="bold" sx={{ mt: 2 }}>{user.name}</Typography>
                <Typography variant="body2" color="text.secondary">{user.title}</Typography>
                <Typography variant="body2" color="text.secondary">{user.location}</Typography>
                <Typography variant="body2" color="primary" sx={{ mt: 1 }}>{user.email}</Typography>
                <Typography variant="body2" color="text.secondary">{user.phone}</Typography>
            </Box>

            <Divider sx={{ my: 2 }} />

            <Box sx={{ mb: 3 }}>
                <Typography variant="subtitle2" fontWeight="bold" gutterBottom>Web Sitesi</Typography>
                <Box sx={{ display: 'flex', gap: 1 }}>
                    <IconButton><LinkedInIcon /></IconButton>
                    <IconButton><GitHubIcon /></IconButton>
                    <IconButton><TwitterIcon /></IconButton>
                </Box>
            </Box>

            <Box>
                <Typography variant="subtitle2" fontWeight="bold" gutterBottom>Dokümanlar</Typography>
                <List dense>
                    {user.documents.map((doc, idx) => (
                        <ListItem key={idx}
                            secondaryAction={
                                <IconButton edge="end" aria-label="delete" size="small">
                                    <DeleteIcon fontSize="small" />
                                </IconButton>
                            }
                        >
                            <ListItemIcon sx={{ minWidth: 30 }}>
                                <DescriptionIcon fontSize="small" />
                            </ListItemIcon>
                            <ListItemText primary={doc.name} primaryTypographyProps={{ variant: 'caption' }} />
                        </ListItem>
                    ))}
                </List>
                <Link href="#" variant="caption" underline="hover">Başka bir doküman ekle</Link>
            </Box>

            <Divider sx={{ my: 2 }} />

            <Box>
                <Typography variant="subtitle2" fontWeight="bold" gutterBottom>Kaydedilen Aramalarım</Typography>
                <List dense>
                    <ListItem secondaryAction={<IconButton size="small"><DeleteIcon fontSize="small" /></IconButton>}>
                        <ListItemText primary="Neyasis Tech." />
                    </ListItem>
                </List>
            </Box>
        </Box>
    );
}
