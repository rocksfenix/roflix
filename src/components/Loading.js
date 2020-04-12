import React from 'react';
import styled from 'styled-components/native';
import { ActivityIndicator } from 'react-native';

const logoImg = require('../../assets/images/logo.png');

const Loading = () => (
  <Container>
    <Logo
      source={logoImg}
      resizeMode="contain"
    />
    <ActivityIndicator
      color="yellow"
    />
  </Container>
);

Loading.propTypes = {};

Loading.defaultProps = {};

const Container = styled.View`
  background-color: #0a0a0a;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.Image`
  width: 200px;
  height: 90px;
`;

export default Loading;
