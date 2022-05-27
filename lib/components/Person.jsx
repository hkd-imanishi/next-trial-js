import React, { memo } from 'react';
import styled from '@emotion/styled';

const CustomSpan = styled.span`
  font-size: 30px;
  background: ${props => props.death ? 'grey' : ''};
`;

const Person = memo((props) => {
  return (
    <>
      <span>{props.face}</span>
      <span>{props.name}</span>
      <CustomSpan death={props.death}>
        俺は{props.age}歳！
      </CustomSpan>
    </>
  );
});

export default Person;
