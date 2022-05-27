import React, { useContext } from 'react';
import { DrawerContext } from "@/contexts/DrawerContext";
import { styled as muiStyled } from '@mui/material/styles';
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const CustomAppBar = muiStyled(AppBar, {})(
  ({ theme }) => ({
    position: 'absolute',
    [theme.breakpoints.up('md')]: {
      zIndex: theme.zIndex.drawer + 1,
    }
}));

const Header = () => {
  const { drawerOpen, toggleDrawerOpen } = useContext(DrawerContext);

  return (
    <CustomAppBar open={drawerOpen}>
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="open drawer"
          onClick={toggleDrawerOpen}
          sx={{
            marginRight: '36px',
            ...(drawerOpen && { display: 'none' }),
          }}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          component="h1"
          variant="h6"
          color="inherit"
          noWrap
          sx={{ flexGrow: 1 }}
        >
          タイトル
        </Typography>
      </Toolbar>
    </CustomAppBar>
  );
};

export default Header;
