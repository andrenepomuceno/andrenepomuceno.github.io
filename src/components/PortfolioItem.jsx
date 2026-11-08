import React, { useState } from 'react';
import { Paper, Link, Box, Typography, Chip } from '@mui/material';
import ArchiveIcon from '@mui/icons-material/Archive';
import { useI18n } from '../i18n/context';

function PortfolioItem({ item }) {
    const { t, l } = useI18n();
    const [imgFailed, setImgFailed] = useState(false);
    const hasImage = item.imgSrc && !imgFailed;

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                gap: { xs: 2, md: 5 },
                mb: 4,
                alignItems: 'flex-start',
                borderRadius: '16px',
                transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                '@media (hover: hover)': {
                    '&:hover': {
                        transform: 'scale(1.02)',
                        boxShadow: '0 12px 32px rgba(166, 212, 250, 0.08)',
                    },
                },
            }}
        >
            {hasImage && (
                <Box
                    component="img"
                    src={item.imgSrc}
                    alt={t('item.imageAlt', { title: item.title })}
                    sx={{
                        width: { xs: '100%', md: 'auto' },
                        height: 'auto',
                        maxWidth: '300px',
                        maxHeight: { xs: '250px', md: '300px' },
                        flexShrink: 0,
                        borderRadius: '12px',
                        objectFit: 'cover',
                        boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
                    }}
                    onError={() => setImgFailed(true)}
                    loading="lazy"
                />
            )}

            <Paper
                elevation={4}
                sx={{
                    p: { xs: 2, sm: 3, md: 4 },
                    flex: 1,
                    minWidth: 0,
                }}
            >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
                        {item.icon}
                        <Typography variant="overline" color="primary">
                            {l(item.category)}
                        </Typography>
                    </Box>
                    <Typography variant="h4" component="h2" gutterBottom sx={{ fontSize: { xs: '1.6rem', sm: '2.125rem' }, overflowWrap: 'break-word' }}>
                        {item.title}
                    </Typography>
                    <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{
                            mb: 3,
                            whiteSpace: 'pre-line',
                            overflowWrap: 'break-word',
                        }}
                    >
                        {l(item.description)}
                    </Typography>
                    {(item.archived || item.tags?.length > 0) && (
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75, mb: 3 }}>
                            {item.archived && (
                                <Chip
                                    icon={<ArchiveIcon />}
                                    label={t('item.archived')}
                                    size="small"
                                    color="warning"
                                    variant="outlined"
                                    sx={{ fontSize: '0.75rem' }}
                                />
                            )}
                            {(item.tags ?? []).map((tag) => (
                                <Chip
                                    key={l(tag)}
                                    label={l(tag)}
                                    size="small"
                                    variant="outlined"
                                    sx={{ borderColor: 'divider', color: 'text.secondary', fontSize: '0.75rem' }}
                                />
                            ))}
                        </Box>
                    )}
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5 }}>
                        {item.links.map((link, linkIndex) => (
                            <Link
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                key={linkIndex}
                                underline="none"
                                aria-label={t('item.linkAriaLabel', { link: l(link.text), title: item.title })}
                            >
                                {link.icon}
                                {l(link.text)}
                            </Link>
                        ))}
                    </Box>
                </Paper>
        </Box>
    );
}

export default PortfolioItem;