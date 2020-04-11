import React from 'react';
import styled from 'styled-components/native';
import propTypes from 'prop-types';

const SuggestionListLayout = ({ title, children }) => (
  <Container>
    <Title>
      {title}
    </Title>
    {children}
  </Container>
);

const Container = styled.View`
  flex: 1;
  padding: 10px 0px;
`;

const Title = styled.Text`
  color: #b0b0b0;
  font-size: 20px;
  margin-bottom: 10px;
  font-weight: bold;
`;

SuggestionListLayout.propTypes = {
  children: propTypes.node.isRequired,
  title: propTypes.string.isRequired,
};

SuggestionListLayout.defaultProps = {};

export default SuggestionListLayout;
