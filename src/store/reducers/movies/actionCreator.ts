import { async } from "@firebase/util";
import { AppDispatch } from "../..";
import { encodeQueryData } from "../../../helpers/queryUlR";
import { IMovie, IMovieDetails } from "../../../models";
import axios from "axios";
import {
  MovieActionEnum,
  SetLoadingAction,
  SetMovieAction,
  SetMoviesAction,
} from "./types";
import { BASE_URL, API_KEY } from "../../../hooks/useRequest";
import { moviesRequests } from "../../../api";

export const moviesActionCreator = {
  setMovies: (movies: IMovie[]): SetMoviesAction => ({
    type: MovieActionEnum.SET_MOVIES,
    payload: movies,
  }),

  setMovie: (movie: IMovieDetails): SetMovieAction => ({
    type: MovieActionEnum.SET_MOVIE,
    payload: movie,
  }),

  setLoading: (loading: boolean): SetLoadingAction => ({
    type: MovieActionEnum.SET_LOADING,
    payload: loading,
  }),

  fetchMovies: () => async (dispatch: AppDispatch) => {
    const moviesData = await moviesRequests.getPopularMovies();
    dispatch(moviesActionCreator.setMovies(moviesData));
  },

  fetchMovie: (id: string) => async (dispatch: AppDispatch) => {
    const movieData = await moviesRequests.getMovieInfo(id);
    dispatch(moviesActionCreator.setMovie(movieData));
  },

  fetchSearch: (search: string) => async (dispatch: AppDispatch) => {
    const searchData = await moviesRequests.getSearchMovies(search);
    dispatch(moviesActionCreator.setMovies(searchData));
  },
};
