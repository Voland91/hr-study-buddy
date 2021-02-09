import React from 'react';
import PropTypes from 'prop-types';
import Circle from 'components/atoms/Circle/Circle';
import Button from 'components/atoms/Button/Button';
import Title from 'components/atoms/Title/Title';
import Text from 'components/atoms/Text/Text';
import { Wrapper } from './UsersListItem.styles';

const UsersListItem = ({ userData: { average, name, attendance = '0%' } }) => (
  <Wrapper>
    <Circle average={average} />
    <div>
      <Title name={name} />
      <Text attendance={attendance} />
    </div>
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
