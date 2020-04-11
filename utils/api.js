const API_HOST = 'https://yts.mx/api/v2';

export default {
  async getSuggestion(id) {
    const query = await fetch(`${API_HOST}/movie_suggestions.json?movie_id=${id}`);
    const { data } = await query.json();
    this.getMovies();
    return data.movies;
  },

  async getMovies() {
    const query = await fetch(`${API_HOST}/list_movies.json?`);
    const { data } = await query.json();
    return data.movies;
  },
};
