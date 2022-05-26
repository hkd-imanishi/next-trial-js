import React, { useContext, memo } from 'react';
import styled from '@emotion/styled';
import { TitleContext } from "@/contexts/TitleContext";

const CustomSpan = styled.span`
  font-size: 30px;
  background: ${props => props.death ? 'grey' : ''};
`;

const Person = memo((props) => {
  const { title, changeTitle } = useContext(TitleContext)
  console.log(`${props.name}参上!!!`);

  return (
    <>
      <button onClick={changeTitle}>XX{title}XX</button>
      <span>{props.face}</span>
      <span>{props.name}</span>
      <CustomSpan death={props.death}>
        I'm{props.age}歳！
      </CustomSpan>
    </>
  );
});

export default Person;
