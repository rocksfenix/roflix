import React from 'react';
import styled from 'styled-components/native';
import propTypes from 'prop-types';

const Category = ({ backgroundImage, genres }) => (
  <Cover
    source={{
      uri: backgroundImage,
    }}
  >
    <Title>{genres[0]}</Title>
  </Cover>
);

Category.propTypes = {
  backgroundImage: propTypes.string.isRequired,
  genres: propTypes.arrayOf(propTypes.string).isRequired,
};

Category.defaultProps = {

};

const Cover = styled.ImageBackground`
  width: 190px;
  height: 100px;
  border-radius: 10px;
  overflow: hidden;
  justify-content: center;
  align-items: center;
`;

const Title = styled.Text`
  flex-direction: row;
  color: white;
  font-size: 20px;
  font-weight: bold;
  text-shadow: 1px 2px 1px rgba(0,0,0,0.7);
`;

export default Category;
