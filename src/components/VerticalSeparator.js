import React from 'react';
import styled from 'styled-components/native';
import propTypes from 'prop-types';

const Container = styled.View`
  border-top-width: 1px;
  border-color: ${({ color }) => color || '#000'};
`;

const VerticalSeparator = ({ color }) => (
  <Container color={color} />
);

VerticalSeparator.propTypes = {
  color: propTypes.string,
};

VerticalSeparator.defaultProps = {
  color: '#000',
};

export default VerticalSeparator;
