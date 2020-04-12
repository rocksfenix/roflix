import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

import SuggestionList from './components/SuggestionList';
import CategoryList from './components/CategoryList';
import Header from './components/Header';
import Search from './components/Search';
import Home from './screens/Home';
import Movie from './screens/Movie';

import { fetchMovies, fetchCategories } from './redux/actions/videos-actions';

const AppLayout = ({ selectedMovie }) => {
  React.useEffect(() => {
    fetchMovies();
    fetchCategories();
  }, []);

  if (selectedMovie.title) {
    return (
      <Movie />
    );
  }

  return (
    <Home>
      <Header />
      <Search />
      <CategoryList />
      <SuggestionList />
    </Home>
  );
};

AppLayout.propTypes = {
  selectedMovie: propTypes.objectOf,
};

AppLayout.defaultProps = {
  selectedMovie: {},
};

const mapStateToProps = (state) => ({
  selectedMovie: state.videos.selectedMovie,
});

export default connect(mapStateToProps)(AppLayout);
