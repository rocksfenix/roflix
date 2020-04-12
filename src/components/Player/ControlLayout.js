import React from 'react';
import styled from 'styled-components/native';
import propTypes from 'prop-types';

const ControlLayout = ({ children }) => (
  <Container>
    {children}
  </Container>
);

ControlLayout.propTypes = {
  children: propTypes.node,
};

ControlLayout.defaultProps = {
  children: null,
};

const Container = styled.View`
  background-color: rgba(0,0,0,0.3);
  justify-content: space-between;
  flex-direction: row;
  padding: 0px 10px;
  height: 35px;
`;

export default ControlLayout;
