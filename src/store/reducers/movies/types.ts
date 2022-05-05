import { IMovie, IMovieDetails } from "../../../models";

export interface MovieState {
  movies: IMovie[];
  movie: IMovieDetails;
  loading: boolean;
}

export enum MovieActionEnum {
  SET_LOADING = "SET_LOADING",
  SET_MOVIE = "SET_MOVIE",
  SET_MOVIES = "SET_MOVIES",
}

export interface SetLoadingAction {
  type: MovieActionEnum.SET_LOADING;
  payload: boolean;
}

export interface SetMovieAction {
  type: MovieActionEnum.SET_MOVIE;
  payload: IMovieDetails;
  // те що приходить нам
}

export interface SetMoviesAction {
  type: MovieActionEnum.SET_MOVIES;
  payload: IMovie[];
}

export type MovieAction = SetLoadingAction | SetMovieAction | SetMoviesAction;
