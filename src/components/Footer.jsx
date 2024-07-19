import React from 'react';
import { Typography, Container, Box } from '@mui/material';
import { HeartBrokenRounded } from '@mui/icons-material';
import theme from '../theme';

const Footer = () => {
  return (
    <Box sx={{ bgcolor: '#e1ab2fed', py: 1 }}>
        <Container>
            <Typography sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', textTransform: 'capitalize'}}>
                @{new Date().getFullYear()} | designed & coded with <HeartBrokenRounded sx={{color: 'red', mx: 0.5}} /> by Lucky
            </Typography>
            </Container>
    </Box>
  );
};

export default Footer;
