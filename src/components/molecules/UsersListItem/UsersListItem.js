import React from 'react';
import PropTypes from 'prop-types';
import Circle from 'components/atoms/Circle/Circle';
import Button from 'components/atoms/Button/Button';
import Title from 'components/atoms/Title/Title';
import Text from 'components/atoms/Text/Text';
import { Wrapper, StyledTextWrapper } from './UsersListItem.styles';
// import styled from 'styled-components'

const UsersListItem = ({ userData: { average, name, attendance = '0%' } }) => (
  <Wrapper>
    <Circle average={average} />
    <StyledTextWrapper>
      <Title name={name} />
      <Text attendance={attendance} />
    </StyledTextWrapper>
    <Button />
  </Wrapper>
);

UsersListItem.propTypes = {
  userData: PropTypes.shape({
    average: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    attendance: PropTypes.string,
  }),
};

export default UsersListItem;
