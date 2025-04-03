import React from 'react';
import { Grid, Paper, Link, Box, Typography } from '@mui/material';

// Component to display a portfolio item using alternative Grid v2 syntax (sx prop) // Traduzido
function PortfolioItem({ item, index }) {

  // Order doesn't change // Traduzido
  const imageOrder = { xs: 1, md: 1 };
  const textOrder = { xs: 2, md: 2 };

  // Base styles for columns (to merge with gridColumn) // Traduzido
  const imageColumnSx = {
    display: 'flex',
    alignItems: 'flex-start', // Mantém alinhamento ao topo
    gridColumn: { xs: 'span 12', md: 'span 6' } // **NEW: Define size via gridColumn** // Traduzido
  };

  const textColumnSx = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start', // Mantém alinhamento ao topo
    gridColumn: { xs: 'span 12', md: 'span 6' } // **NEW: Define size via gridColumn** // Traduzido
  };


  return (
    <Grid
      container // This is the container
      spacing={{ xs: 2, md: 5 }}
      sx={{ mb: 4 }}
    >
      {/* Image Column (Always Left on 'md+') */} {/* Traduzido */}
      {/* Removed xs/md props, using sx with gridColumn */} {/* Traduzido */}
      <Grid order={imageOrder} sx={imageColumnSx} >
        <Box
          component="img"
          src={item.imgSrc}
          // Alt text translated
          alt={`[Image of ${item.title}]`}
          sx={{
            width: '100%',
            height: 'auto',
            maxHeight: { xs: '300px', md: '400px' },
            display: 'block',
            borderRadius: '12px',
            objectFit: 'cover',
            boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
          }}
          onError={(e) => {
            e.target.onerror = null;
            // Error message text translated inside the URL
            e.target.src = `https://placehold.co/600x400/1a1a1a/666?text=Error+loading+${item.title}`;
            e.target.style.objectFit = 'contain';
          }}
        />
      </Grid>

      {/* Text Column (Always Right on 'md+') */} {/* Traduzido */}
       {/* Removed xs/md props, using sx with gridColumn */} {/* Traduzido */}
      <Grid order={textOrder} sx={textColumnSx} >
        {/* Paper with automatic height */} {/* Traduzido */}
        <Paper
            elevation={4}
            sx={{ p: { xs: 2, sm: 3, md: 4 }, width: '100%' }} // Takes full width // Traduzido
        >
          {/* Paper Content */} {/* Traduzido */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
            {item.icon}
            <Typography variant="overline" color="primary">
              {/* Assuming item.category is already translated from data.jsx */}
              {item.category}
            </Typography>
          </Box>
          <Typography variant="h4" component="h2" gutterBottom>
             {/* Assuming item.title is already translated from data.jsx */}
            {item.title}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
                mb: 3,
                whiteSpace: 'pre-line',    // Respects \n // Traduzido
                overflowWrap: 'break-word', // Breaks long words // Traduzido
             }}
          >
             {/* Assuming item.description is already translated from data.jsx */}
            {item.description}
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5 }}>
             {/* Assuming item.links[...].text is already translated from data.jsx */}
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
      </Grid>
    </Grid>
  );
}

export default PortfolioItem;