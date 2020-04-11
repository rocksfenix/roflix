import React from 'react';
import { Text } from 'react-native';

import SuggestionList from './src/videos/containers/SuggestionList';
import CategoryList from './src/videos/containers/CategoryList';
import Header from './src/sections/components/Header';
import Home from './src/screens/containers/Home';
import Player from './src/player/containers/Player';


import Api from './utils/api';

const App = () => {
  const [movies, setMovies] = React.useState([]);
  const [categories, setCategories] = React.useState([]);

  React.useEffect(() => {
    (async () => {
      const moviesResponse = await Api.getSuggestion(10);
      const categoriesResponse = await Api.getMovies();

      setMovies(moviesResponse);
      setCategories(categoriesResponse);
    })();
  }, []);

  return (
    <Home>
      <Header />
      <Player />
      <CategoryList
        list={categories}
      />
      <SuggestionList
        list={movies}
      />
    </Home>
  );
};

export default App;
