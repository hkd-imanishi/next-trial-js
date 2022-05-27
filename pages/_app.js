import React from 'react';
import '../styles/globals.css';
import { DrawerProvider } from "@/contexts/DrawerContext";
import { Box, CssBaseline, Container, Grid, Paper, Toolbar } from '@mui/material';

import Header from "@/components/Header";
import SideMenu from "@/components/SideMenu";

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <DrawerProvider>
        <Header />
        <Box sx={{ display: 'flex' }}>
          <Box>
            <SideMenu />
          </Box>
          <Box sx={{ position: 'relative', flexGrow: 1 }} >
            <CssBaseline />
            <Box
              component="main"
              sx={{
                backgroundColor: (theme) =>
                  theme.palette.mode === 'light'
                    ? theme.palette.grey[100]
                    : theme.palette.grey[900],
                height: '100vh',
                overflow: 'auto',
              }}
            >
              <Toolbar />
              <Container maxWidth="lg" sx={{ mt: 2, mb: 2 }}>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <Paper
                      sx={{
                        p: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        height: 240,
                      }}
                    >
                      <Component {...pageProps} />
                    </Paper>
                  </Grid>
                </Grid>
              </Container>
            </Box>
          </Box>
        </Box>
      </DrawerProvider>
    </>
  );
};

export default MyApp;
