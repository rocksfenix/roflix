import React, { useState } from 'react';
import styled from 'styled-components/native';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import api from '../../utils/api';

const Search = ({ dispatch }) => {
  const [text, setText] = useState('');

  const handleSubmit = async () => {
    const movies = await api.searchMovie(text);
    dispatch({
      type: 'SET_SELECTED_MOVIE',
      payload: {
        movie: movies[0],
      },
    });
  };

  const onChangeText = (newText) => {
    setText(newText);
  };

  return (
    <Container>
      <Input
        placeholder="Search"
        underlineColorAndroid="transparent"
        autoCorrect={false}
        autoCapitalize="none"
        onSubmitEditing={handleSubmit}
        onChangeText={onChangeText}
      />
    </Container>
  );
};

Search.propTypes = {
  dispatch: propTypes.func.isRequired,
};

Search.defaultProps = {};

const Container = styled.View`
  overflow: hidden;
  align-items: center;
  justify-content: center;
  background-color: #FFF;
`;

const Input = styled.TextInput`
  font-weight: bold;
  width: 100%;
  padding: 10px 15px;
`;

export default connect()(Search);
