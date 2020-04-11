import React from 'react';
import styled from 'styled-components/native';
import propTypes from 'prop-types';

const Container = styled.View`
  flex: 1;
  padding: 10px 0px;
`;

const Title = styled.Text`
  color: #4C4C4C;
  font-size: 16px;
  margin-bottom: 10px;
`;

const EmptyMessage = ({ children, text }) => (
  <Container>
    <Title>
      {children || text}
    </Title>
  </Container>
);

EmptyMessage.propTypes = {
  children: propTypes.node,
  text: propTypes.string,
};

EmptyMessage.defaultProps = {
  children: null,
  text: '',
};


export default EmptyMessage;
