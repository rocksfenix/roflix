import React from 'react';
import styled from 'styled-components/native';
import propTypes from 'prop-types';
import { TouchableOpacity } from 'react-native';

const starPng = require('../../../assets/images/star.png');

const Suggestion = ({
  genres, title, year, rating, backgroundImage, onPress,
}) => (
  <TouchableOpacity
    onPress={onPress}
  >
    <Container>
      <Cover
        resizeMode="cover"
        source={{ uri: backgroundImage }}
      />
      <Genre>
        <GenreText>{ genres[1] }</GenreText>
      </Genre>
      <Right>
        <Title>{ title}</Title>
        <Year>{ year}</Year>
        <Rating>
          <RatingText>
            { rating }
          </RatingText>
          <Star
            source={starPng}
            resizeMode="contain"
          />
        </Rating>
      </Right>
    </Container>
  </TouchableOpacity>
);

Suggestion.propTypes = {
  genres: propTypes.arrayOf(propTypes.string).isRequired,
  title: propTypes.string.isRequired,
  year: propTypes.number.isRequired,
  rating: propTypes.number.isRequired,
  backgroundImage: propTypes.string.isRequired,
  onPress: propTypes.func.isRequired,
};

Suggestion.defaultProps = {

};

const Container = styled.View`
  flex-direction: row;
`;

const Genre = styled.View`
  left: 0px;
  top: 10px;
  padding: 5px 7px;
  position: absolute;
  background-color: rgba(0,0,0,0.8);
`;

const GenreText = styled.Text`
  color: #FFF;
  font-size: 11px;
`;

const Cover = styled.Image`
  width: 150px;
  height: 100px;
`;

const Right = styled.View`
  padding-left: 10px;
  justify-content: space-around;
`;

const Title = styled.Text`
  font-size: 18px;
  color: #969696;
`;

const Year = styled.Text`
  background-color: #b85d00;
  align-self: flex-start;
  padding: 4px 6px;
  color: #FFF;
  font-size: 11px;
  border-radius: 5px;
  overflow: hidden;
`;

const Rating = styled.View`
  color: #6b6b6b;
  font-size: 14px;
  flex: 0.4;
  width: 40px;
  font-weight: bold;
  flex-direction: row;
  align-items: center;
`;

const RatingText = styled.Text`
  color: #6b6b6b;
  font-size: 14px;
  font-weight: bold;
`;

const Star = styled.Image`
  width: 12px;
  height: 12px;
  margin: 0px 5px;
`;

export default Suggestion;
