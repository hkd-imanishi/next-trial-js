import React, { useState, createContext } from 'react'

//createContextを使ってUserContextとHobbyContextを作成
// export const DrawerContext = createContext({
//   drawerOpen: true,
//   drawerWidth: 0,
//   setDrawerOpen: () => {}
// })
export const DrawerContext = createContext()

export const DrawerProvider = (props) => {
  const [drawerOpen, setDrawerOpen] = useState(true);
  const toggleDrawerOpen = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <DrawerContext.Provider value={{ drawerOpen, toggleDrawerOpen }}>
      {props.children}
    </DrawerContext.Provider>
  );
};
