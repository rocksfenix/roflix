import React from 'react';
import styled from 'styled-components/native';
import propTypes from 'prop-types';

const Container = styled.View`
  flex: 1;
  background-color: #141414;
`;

const Home = ({ children }) => (
  <Container>
    {children}
  </Container>
);

export default Home;

Home.propTypes = {
  children: propTypes.node.isRequired,
};

Home.defaultProps = {
};
