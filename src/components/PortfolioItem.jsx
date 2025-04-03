import React from 'react';
import { Grid, Paper, Link, Box, Typography } from '@mui/material';

// Componente para exibir um item do portfólio com sintaxe Grid v2 alternativa (sx prop)
function PortfolioItem({ item, index }) {

  // Ordem não muda
  const imageOrder = { xs: 1, md: 1 };
  const textOrder = { xs: 2, md: 2 };

  // Estilos base para as colunas (para mesclar com gridColumn)
  const imageColumnSx = {
    display: 'flex',
    alignItems: 'flex-start', // Mantém alinhamento ao topo
    gridColumn: { xs: 'span 12', md: 'span 6' } // **NOVO: Define tamanho via gridColumn**
  };

  const textColumnSx = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start', // Mantém alinhamento ao topo
    gridColumn: { xs: 'span 12', md: 'span 6' } // **NOVO: Define tamanho via gridColumn**
  };


  return (
    <Grid
      container // Este é o container
      spacing={{ xs: 2, md: 5 }}
      sx={{ mb: 4 }}
    >
      {/* Coluna da Imagem (Sempre à Esquerda em 'md+') */}
      {/* Removidas props xs/md, usando sx com gridColumn */}
      <Grid order={imageOrder} sx={imageColumnSx} >
        <Box
          component="img"
          src={item.imgSrc}
          alt={`[Imagem de ${item.title}]`} // Texto alt em português
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
            e.target.src = `https://placehold.co/600x400/1a1a1a/666?text=Erro+ao+carregar+${item.title}`;
            e.target.style.objectFit = 'contain';
          }}
        />
      </Grid>

      {/* Coluna do Texto (Sempre à Direita em 'md+') */}
       {/* Removidas props xs/md, usando sx com gridColumn */}
      <Grid order={textOrder} sx={textColumnSx} >
        {/* Paper com altura automática */}
        <Paper
            elevation={4}
            sx={{ p: { xs: 2, sm: 3, md: 4 }, width: '100%' }} // Ocupa largura total
        >
          {/* Conteúdo do Paper */}
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
                whiteSpace: 'pre-line',    // Respeita \n
                overflowWrap: 'break-word', // Quebra palavras longas
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
      </Grid>
    </Grid>
  );
}

export default PortfolioItem;
