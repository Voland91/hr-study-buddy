import React from 'react';
import { StyledCircle } from './Circle.styles';

const Circle = ({ average }) => (
  <StyledCircle neutral={average > 3 && average < 4} good={average > 4}>
    {average}
  </StyledCircle>
);
export default Circle;
