import React from 'react';
import { Grid, Paper, Link, Box, Typography } from '@mui/material';

// Componente para exibir um item do portfólio
function PortfolioItem({ item, index }) {

  // Ordem não muda
  const imageOrder = { xs: 1, md: 1 };
  const textOrder = { xs: 2, md: 2 };

  // Estilos base para as colunas
  const imageColumnSx = {
    display: 'flex',
    alignItems: 'flex-start',
    gridColumn: { xs: 'span 12', md: 'span 6' }
  };

  const textColumnSx = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    gridColumn: { xs: 'span 12', md: 'span 6' }
  };


  return (
    // Aplica o efeito de hover no Grid container principal
    <Grid
      container
      spacing={{ xs: 2, md: 5 }}
      sx={{
        mb: 4,
        // Adiciona uma transição suave para a propriedade transform
        transition: 'transform 0.3s ease-in-out',
        // Define o estilo quando o mouse estiver sobre o elemento
        '&:hover': {
          transform: 'scale(1.02)', // Aumenta levemente a escala do item
          // Você poderia adicionar outros efeitos aqui, como aumentar a sombra:
          // boxShadow: '0 12px 24px rgba(0,0,0,0.25)'
        },
      }}
    >
      {/* Coluna da Imagem */}
      <Grid order={imageOrder} sx={imageColumnSx} >
        <Box
          component="img"
          src={item.imgSrc}
          alt={`[Image of ${item.title}]`} // Usando texto alt em inglês
          sx={{
            width: '100%',
            height: 'auto',
            maxHeight: { xs: '300px', md: '400px' },
            display: 'block',
            borderRadius: '12px',
            objectFit: 'cover',
            boxShadow: '0 8px 16px rgba(0,0,0,0.2)', // Sombra existente
          }}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = `https://placehold.co/600x400/1a1a1a/666?text=Error+loading+${item.title}`; // Mensagem de erro em inglês
            e.target.style.objectFit = 'contain';
          }}
        />
      </Grid>

      {/* Coluna do Texto */}
      <Grid order={textOrder} sx={textColumnSx} >
        <Paper
            elevation={4} // Mantém a elevação padrão
            sx={{
              p: { xs: 2, sm: 3, md: 4 },
              width: '100%'
              // A transição principal já está no Grid container
            }}
        >
          {/* Conteúdo do Paper (Título, Descrição, Links) */}
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
                // Estilo do link já vem do tema (theme.js)
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