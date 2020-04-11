import React from 'react';
import styled from 'styled-components/native';
import propTypes from 'prop-types';


const CategoryListLayout = ({ title, children }) => (
  <Container>
    <Title>{title}</Title>
    {children}
  </Container>
);

CategoryListLayout.propTypes = {
  title: propTypes.string.isRequired,
  children: propTypes.node,
};

CategoryListLayout.defaultProps = {
  children: null,
};

const Container = styled.View`
  background-color: #222;
  padding: 15px 5px;
`;

const Title = styled.Text`
  color: #b0b0b0;
  font-size: 20px;
  margin-bottom: 10px;
  font-weight: bold;
`;


export default CategoryListLayout;
