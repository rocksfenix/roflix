import React from 'react';
import styled from 'styled-components/native';
import { ActivityIndicator } from 'react-native';
import propTypes from 'prop-types';

const Loader = ({ isLoading, color }) => (
  isLoading
    ? (
      <Container>
        <ActivityIndicator color={color} />
      </Container>
    )
    : null
);

Loader.propTypes = {
  isLoading: propTypes.bool,
  color: propTypes.string,
};

Loader.defaultProps = {
  isLoading: false,
  color: 'yellow',
};

const Container = styled.View`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  justify-content: center;
  align-items: center;
`;

export default Loader;
