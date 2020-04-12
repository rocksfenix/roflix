import React from 'react';
import styled from 'styled-components/native';
import propTypes from 'prop-types';
import VideoTrailer from './VideoTrailer';

const MovieDetails = ({ movie }) => (
  <Container>
    <ScrollView>
      <Image
        resizeMode="contain"
        source={{ uri: movie.medium_cover_image }}
      />
      <Title>{ movie.title }</Title>
      <Description>
        { movie.description_full.substr(0, 150) }
        {'...'}
      </Description>
      <VideoBox>
        <VideoTrailer id={movie.yt_trailer_code} />
      </VideoBox>
    </ScrollView>
  </Container>
);

MovieDetails.propTypes = {
  movie: propTypes.objectOf({
    title: propTypes.string,
    description: propTypes.string,
  }).isRequired,
};

MovieDetails.defaultProps = {};

const Container = styled.View`
  background-color: #222;
  flex: 1;
  justify-content: center;
  align-items: flex-start;
  padding: 0px 10px;
`;

const ScrollView = styled.ScrollView`

`;

const Title = styled.Text`
  color: #FFF;
  font-size: 22px;
  height: 50px;
`;

const Description = styled.Text`
  color: #FFF;
`;

const Image = styled.Image`
  width: 80px;
  height: 150px;
`;

const VideoBox = styled.View`
  flex: 1;
  width: 100%;
  height: 225px;
  margin: 20px 0px;
  background-color: gray;
`;

export default MovieDetails;
