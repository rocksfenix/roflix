import React from 'react';
import styled from 'styled-components/native';
import propTypes from 'prop-types';

const Container = styled.View`
  border-right-width: 1px;
  border-color: ${({ color }) => color};
  margin: 0px 10px;
`;

const HorizontalSeparator = ({ color }) => (
  <Container color={color} />
);

HorizontalSeparator.propTypes = {
  color: propTypes.string,
};

HorizontalSeparator.defaultProps = {
  color: '#FFF',
};

export default HorizontalSeparator;
