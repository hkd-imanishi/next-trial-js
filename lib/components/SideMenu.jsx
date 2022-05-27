import React, { useContext } from 'react';
import { DrawerContext } from "@/contexts/DrawerContext";
import { styled as muiStyled, useTheme } from '@mui/material/styles';
import { Drawer, Divider, List, ListItem, Toolbar, Backdrop } from '@mui/material';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import useMediaQuery from '@mui/material/useMediaQuery';

const CustomDrawer = muiStyled(Drawer, {
  shouldForwardProp: (prop) => prop !== 'open' && prop !== 'width'
})(
  ({ theme, open, width }) => ({
    '& .MuiDrawer-paper': {
      position: 'absolute',
      [theme.breakpoints.up('md')]: {
        position: 'relative'
      },
      width: width,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      [theme.breakpoints.down('md')]: {
        ...(!open && {
          width: 0,
          overflowX: 'hidden',
          transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
        }),
      }
    },
  })
)

const SideMenu = () => {
  const drawerWidth = 240;
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));
  const { drawerOpen, toggleDrawerOpen } = useContext(DrawerContext);

  return (
    <>
      <Toolbar sx={{[theme.breakpoints.down('md')]: { display: 'none' }}} />
      <ClickAwayListener
        mouseEvent="onMouseDown"
        touchEvent="onTouchStart"
        onClickAway={() => matches && drawerOpen && toggleDrawerOpen()}
      >
        <CustomDrawer
          variant="permanent"
          anchor="left"
          open={drawerOpen}
          width={drawerWidth}
        >
          <Divider />
          <List component="nav">
            <ListItem>{drawerWidth}</ListItem>
            <Divider sx={{ my: 1 }} />
            <ListItem>{drawerOpen && 'true'}</ListItem>
            <Divider sx={{ my: 1 }} />
          </List>
        </CustomDrawer>
      </ClickAwayListener>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer - 1 }}
        open={drawerOpen}
      />
    </>
  );
};

export default SideMenu;
