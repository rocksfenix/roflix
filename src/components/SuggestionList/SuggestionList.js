import React, { Component } from 'react';
import styled from 'styled-components/native';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import Layout from './SuggestionListLayout';
import EmptyMessage from '../EmptyMessage';
import Separator from '../VerticalSeparator';
import Suggestion from './Suggestion';

class SuggestionList extends Component {
  EmptyMessage = <EmptyMessage text="No hay Sugerencias :(" />

  Separator = () => <Separator color="#282828" />

  Item = ({ item }) => (
    <Suggestion
      genres={item.genres}
      title={item.title}
      year={item.year}
      rating={item.rating}
      backgroundImage={item.background_image}
      onPress={() => this.viewMovie(item)}
    />
  )

  itemKey = (item) => item.key

  viewMovie = (movie) => {
    const { dispatch } = this.props;
    dispatch({
      type: 'SET_SELECTED_MOVIE',
      payload: { movie },
    });
  }

  render() {
    const { movies } = this.props;
    return (
      <Layout title="Recomendations for you">
        <List
          data={movies}
          keyExtractor={this.ItemKey}
          ListEmptyComponent={this.EmptyMessage}
          ItemSeparatorComponent={this.Separator}
          renderItem={this.Item}
        />
      </Layout>
    );
  }
}

SuggestionList.propTypes = {
  movies: propTypes.arrayOf(propTypes.object),
  dispatch: propTypes.func.isRequired,
};

SuggestionList.defaultProps = {
  movies: [],
};

const List = styled.FlatList``;

const mapStateToProps = (state) => ({
  movies: state.videos.movies,
});

export default connect(mapStateToProps)(SuggestionList);
