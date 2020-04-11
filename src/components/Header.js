import React from 'react';
import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native';
import propTypes from 'prop-types';

const imgSource = require('../../assets/images/logo.png');

const Header = ({ children }) => (
  <Container>
    {/* SafeAreaView for fix superposition at Iphone-X */}
    <SafeAreaView>
      <ImageBox>
        <Image
          resizeMode="contain"
          source={imgSource}
        />
        <Right>
          {children}
        </Right>
      </ImageBox>
    </SafeAreaView>
  </Container>
);

Header.propTypes = {
  children: propTypes.node,
};

Header.defaultProps = {
  children: null,
};


const Container = styled.View`
  background-color: #0a0a0a;
`;

const Image = styled.Image`
  width: 90px;
  height: 30px;
  margin: 0px 10px;
`;

const ImageBox = styled.View`
  flex-direction: row;
  padding: 10px 5px;
`;

const Right = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
  color: #FFF;
`;


export default Header;
