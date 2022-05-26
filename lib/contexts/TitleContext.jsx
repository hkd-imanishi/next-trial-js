import React, { useState, createContext } from 'react'

//createContextを使ってUserContextとHobbyContextを作成
export const TitleContext = createContext({
  title: 'd',
  changeTitle: () => {
    alert('🐓')
  }
})

export const TitleProvider = (props) => {
  const [title, setTitle] = useState();
  const changeTitle = () => {
    setTitle(() => 'changeeeeeeeeee!!!!!!!!!');
  };

  return (
    <TitleContext.Provider value={{ title, changeTitle }}>
      {props.children}
    </TitleContext.Provider>
  );
};
