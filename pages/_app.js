import React from 'react';
import '../styles/globals.css';
import { AppBar, Toolbar, Typography } from '@mui/material';
import { TitleProvider } from "@/contexts/TitleContext";

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <TitleProvider>
        <AppBar position='relative'>
          <Toolbar>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
            </Typography>
          </Toolbar>
        </AppBar>
        <Component {...pageProps} />
      </TitleProvider>
    </>
  );
};

export default MyApp;
