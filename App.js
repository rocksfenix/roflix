import React from 'react';

import SuggestionList from './src/components/SuggestionList';
import CategoryList from './src/components/CategoryList';
import Header from './src/components/Header';
import Home from './src/screens/Home';
import Player from './src/components/Player';
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
