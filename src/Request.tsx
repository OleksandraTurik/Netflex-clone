import axios from 'axios'
const API_KEY = '5592ff8e73c8b02e28c3fbcebfe6dd2a';

export const Api = {
  getData: async () => {
    const req = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`
    );
    return req.data;
  },

  getMovieInfo: async (movieId: any) => {
      const inf = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=uk-UA`);
      return inf.data;
  }
};