import React, { useState } from 'react';
import { Paper, Link, Box, Typography } from '@mui/material';

function PortfolioItem({ item, index }) {
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
                    alt={`Image of ${item.title}`}
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
                            {item.category}
                        </Typography>
                    </Box>
                    <Typography variant="h4" component="h2" gutterBottom>
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
                        {item.description}
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5 }}>
                        {item.links.map((link, linkIndex) => (
                            <Link
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                key={linkIndex}
                                underline="none"
                            >
                                {link.icon}
                                {link.text}
                            </Link>
                        ))}
                    </Box>
                </Paper>
        </Box>
    );
}

export default PortfolioItem;