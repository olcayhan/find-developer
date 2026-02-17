import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import Link from '@mui/material/Link';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import DescriptionIcon from '@mui/icons-material/Description';
import CloseIcon from '@mui/icons-material/Close';
import Divider from '@mui/material/Divider';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LanguageIcon from '@mui/icons-material/Language';
import PinterestIcon from '@mui/icons-material/Pinterest';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import ArticleIcon from '@mui/icons-material/Article';
import SearchIcon from '@mui/icons-material/Search';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import { useTranslations } from 'next-intl';

interface User {
    name: string;
    title: string;
    location: string;
    email: string;
    phone: string;
    documents: { name: string; type: 'pdf' | 'doc' | string }[];
    savedSearches?: { id: string; name: string }[];
    applications?: { id: string; name: string; company: string }[];
}

export default function ProfileSidebar({ user }: { user: User }) {
    const t = useTranslations('Profile');
    const linkColor = '#4361ee';
    const grayText = '#666';

    return (
        <Box sx={{ p: 3, borderRadius: 2 }}>
            {/* Avatar & User Info */}
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', mb: 3 }}>
                <Box
                    sx={{
                        width: 140,
                        height: 140,
                        border: '1px solid',
                        borderColor: linkColor,
                        borderRadius: '12px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        position: 'relative',
                        mb: 2,
                        bgcolor: 'rgba(67, 97, 238, 0.03)'
                    }}
                >
                    <Box
                        component="button"
                        sx={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: 48,
                            height: 48,
                            bgcolor: linkColor,
                            border: 'none',
                            borderTopLeftRadius: '11px',
                            borderBottomRightRadius: '24px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer',
                            padding: 0,
                            zIndex: 2,
                            '&:hover': {
                                bgcolor: '#304ffe'
                            }
                        }}
                    >
                        <EditIcon sx={{ color: 'white', fontSize: '1.2rem', ml: -0.5, mt: -0.5 }} />
                    </Box>
                    <PersonOutlineIcon sx={{ fontSize: 80, color: linkColor, stroke: 'currentColor', strokeWidth: 0.5 }} />
                </Box>

                <Typography variant="h6" color={linkColor} fontWeight="bold" fontSize={22} sx={{ mb: 0.5 }}>
                    {user.name}
                </Typography>
                <Typography variant="body2" color={grayText} fontSize={15} sx={{ mb: 0.5 }}>
                    {user.title}
                </Typography>
                <Typography variant="body2" color={grayText} fontSize={15} sx={{ mb: 1 }}>
                    {user.location}
                </Typography>
                <Typography variant="body2" color={grayText} fontSize={15} sx={{ mb: 0.5 }}>
                    {user.email}
                </Typography>
                <Typography variant="body2" color={grayText} fontSize={15} sx={{ mb: 2 }}>
                    {user.phone}
                </Typography>

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1, cursor: 'pointer' }}>
                    <FileDownloadOutlinedIcon sx={{ color: linkColor, fontSize: 20 }} />
                    <Typography variant="body2" color="text.primary" sx={{ textDecoration: 'underline', fontSize: 14, fontWeight: 500 }}>
                        {t('downloadCV')}
                    </Typography>
                </Box>

                <Link href="#" underline="hover" sx={{ color: linkColor, fontSize: 14 }}>
                    {t('editProfile')}
                </Link>
            </Box>

            <Divider sx={{ my: 3, borderColor: '#eee' }} />

            {/* Social Media */}
            <Box sx={{ mb: 3 }}>
                <Typography variant="subtitle1" color={linkColor} sx={{ mb: 2, fontSize: 16 }}>
                    {t('website')}
                </Typography>
                <Box sx={{ display: 'flex', gap: 1.5, mb: 1.5, flexWrap: 'wrap' }}>
                    <LinkedInIcon sx={{ color: '#0077b5', fontSize: 24, cursor: 'pointer' }} />
                    <GitHubIcon sx={{ color: '#333', fontSize: 24, cursor: 'pointer' }} />
                    <ArticleIcon sx={{ color: '#333', fontSize: 24, cursor: 'pointer' }} /> {/* Generic for Medium/Dev.to */}
                    <Box sx={{ width: 24, height: 24, bgcolor: '#0057ff', borderRadius: 0.5, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                        <Typography variant="caption" color="white" fontWeight="bold" sx={{ fontSize: 14 }}>Bē</Typography>
                    </Box>
                    <LanguageIcon sx={{ color: '#ea4c89', fontSize: 24, cursor: 'pointer' }} /> {/* Dribbble-ish color */}
                    <FacebookIcon sx={{ color: '#1877f2', fontSize: 24, cursor: 'pointer' }} />
                    <TwitterIcon sx={{ color: '#1da1f2', fontSize: 24, cursor: 'pointer' }} />
                    <LanguageIcon sx={{ color: '#666', fontSize: 24, cursor: 'pointer' }} />
                </Box>
                <Link href="#" underline="hover" sx={{ color: linkColor, fontSize: 14 }}>
                    {t('edit')}
                </Link>
            </Box>

            <Divider sx={{ my: 3, borderColor: '#eee' }} />

            {/* Documents */}
            <Box sx={{ mb: 3 }}>
                <Typography variant="subtitle1" color={linkColor} sx={{ mb: 1, fontSize: 16 }}>
                    {t('documents')}
                </Typography>
                <List dense disablePadding>
                    {user.documents.map((doc, idx) => (
                        <ListItem key={idx} disablePadding sx={{ py: 0.5 }}>
                            <ListItemIcon sx={{ minWidth: 32 }}>
                                {doc.type === 'pdf' ? (
                                    <PictureAsPdfIcon sx={{ color: '#666', fontSize: 20 }} />
                                ) : (
                                    <DescriptionIcon sx={{ color: '#666', fontSize: 20 }} />
                                )}
                            </ListItemIcon>
                            <ListItemText
                                primary={doc.name}
                                primaryTypographyProps={{ fontSize: 14, color: '#666' }}
                            />
                            <IconButton size="small" sx={{ p: 0.5 }}>
                                <CloseIcon sx={{ fontSize: 16, color: '#aaa' }} />
                            </IconButton>
                        </ListItem>
                    ))}
                </List>
                <Link href="#" underline="hover" sx={{ color: linkColor, fontSize: 14, display: 'inline-block', mt: 1 }}>
                    {t('addDocument')}
                </Link>
            </Box>

            <Divider sx={{ my: 3, borderColor: '#eee' }} />

            {/* Saved Searches */}
            <Box sx={{ mb: 3 }}>
                <Typography variant="subtitle1" color={linkColor} sx={{ mb: 1, fontSize: 16 }}>
                    {t('savedSearches')}
                </Typography>
                <List dense disablePadding>
                    {(user.savedSearches || [{ id: '1', name: 'Neyasis Tech.' }, { id: '2', name: 'Apple' }]).map((search) => (
                        <ListItem key={search.id} disablePadding sx={{ py: 0.5 }}>
                            <ListItemIcon sx={{ minWidth: 32 }}>
                                <SearchIcon sx={{ color: '#999', fontSize: 22 }} />
                            </ListItemIcon>
                            <ListItemText
                                primary={search.name}
                                primaryTypographyProps={{ fontSize: 14, color: '#666' }}
                            />
                            <IconButton size="small" sx={{ p: 0.5 }}>
                                <CloseIcon sx={{ fontSize: 16, color: '#aaa' }} />
                            </IconButton>
                        </ListItem>
                    ))}
                </List>
            </Box>

            <Divider sx={{ my: 3, borderColor: '#eee' }} />

            {/* Applications */}
            <Box sx={{ mb: 3 }}>
                <Typography variant="subtitle1" color={linkColor} sx={{ mb: 1, fontSize: 16 }}>
                    {t('applications')}
                </Typography>
                <List dense disablePadding>
                    {(user.applications || [{ id: '1', name: 'Neyasis Tech.', company: 'Neyasis Tech.' }]).map((app) => (
                        <ListItem key={app.id} disablePadding sx={{ py: 0.5 }}>
                            <ListItemIcon sx={{ minWidth: 32 }}>
                                <WorkOutlineIcon sx={{ color: '#999', fontSize: 20 }} />
                            </ListItemIcon>
                            <ListItemText
                                primary={app.name}
                                primaryTypographyProps={{ fontSize: 14, color: '#666' }}
                            />
                            <IconButton size="small" sx={{ p: 0.5 }}>
                                <CloseIcon sx={{ fontSize: 16, color: '#aaa' }} />
                            </IconButton>
                        </ListItem>
                    ))}
                </List>
                <Link href="#" underline="hover" sx={{ color: linkColor, fontSize: 14, display: 'inline-block', mt: 1 }}>
                    {t('viewAll')}
                </Link>
            </Box>
        </Box>
    );
}
