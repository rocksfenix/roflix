import React, { useState, useEffect } from 'react';
import styled from 'styled-components/native';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import Player from '../components/Player';
import Header from '../components/Header';
import Close from '../components/Close';
import MovieDetails from '../components/MovieDetails';
import { selectMovie } from '../redux/actions/videos-actions';
import { Animated } from 'react-native';

const Movie = ({ dispatch, selectedMovie }) => {
  // const [opacity, setOpacity] = useState(
  //   new Animated.Value(),
  // );

  // let opacity = 0;

  // useEffect(() => {
  //   Animated.timing(
  //     opacity,
  //     {
  //       toValue: 1,
  //       duration: 1000,
  //     },
  //   ).start();
  // }, []);

  const [state] = useState({ opacity: new Animated.Value(0) });

  useEffect(() => {
    Animated.timing(state.opacity, {
      toValue: 1,
      duration: 1200,
      useNativeDriver: true,
    }).start();
    return () => {};
  }, []);

  const onClose = () => {
    dispatch(
      selectMovie(),
    );
  };

  return (
    <Animated.View
      style={{
        flex: 1,
        opacity: state.opacity,
      }}
    >
      <Container>
        <Header>
          <Close onPress={onClose} />
        </Header>
        <Player />
        <MovieDetails
          movie={selectedMovie}
        />
      </Container>
    </Animated.View>
  );
};


Movie.propTypes = {
  dispatch: propTypes.func.isRequired,
  selectedMovie: propTypes.objectOf({
    title: propTypes.string,
  }).isRequired,
};

Movie.defaultProps = {
};


const Container = styled.View`
  flex: 1;
`;

const mapStateToProps = (state) => ({
  selectedMovie: state.videos.selectedMovie,
});

export default connect(mapStateToProps)(Movie);
