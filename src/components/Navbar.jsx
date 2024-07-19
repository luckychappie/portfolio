import React from 'react';
import { AppBar } from '@mui/material';
import theme from '../theme';

const Navbar = () => {
  return (
    <AppBar position="static" sx={{ bgcolor: theme.palette.background.default }}>
      {/* <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1, textAlign: 'center' }}>
          My Portfolio
        </Typography>
      </Toolbar> */}
    </AppBar>
  );
};

export default Navbar;
