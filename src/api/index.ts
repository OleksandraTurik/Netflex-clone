import { API_KEY, movieAPI } from "../axios/movies";
import { encodeQueryData } from "../helpers/queryUlR";

export const moviesRequests = {
  getPopularMovies: async () => {
    const requestURI = `/movie/popular?${encodeQueryData({
      api_key: API_KEY,
    })}`;

    const { data } = await movieAPI.get(requestURI);
    return data.results;
  },

  getSearchMovies: async (search: string) => {
    const requestURI = `/search/movie?${encodeQueryData({
      api_key: API_KEY,
      query: search
    })}`;

    const { data } = await movieAPI.get(requestURI);
    return data.results;
  },

  getMovieInfo: async () => {
    const requestURI = `/movie/popular?${encodeQueryData({
      api_key: API_KEY,
    })}`;

    const { data } = await movieAPI.get(requestURI);
    return data;
  },

};
