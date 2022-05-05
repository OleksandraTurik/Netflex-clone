import { IMovie, IMovieDetails } from "../../../models";
import { MovieAction, MovieActionEnum, MovieState } from "./types";

const initialState: MovieState = {
  movies: [] as IMovie[],
  movie: {} as IMovieDetails,
  loading: false,
};

export default function movieReducer(
  state = initialState,
  action: MovieAction
): MovieState {
  switch (action.type) {
    case MovieActionEnum.SET_MOVIE:
      return { ...state, movie: action.payload, loading: false };
    case MovieActionEnum.SET_MOVIES:
      return { ...state, movies: action.payload, loading: false };
    case MovieActionEnum.SET_LOADING:
      return { ...state, loading: action.payload };
    default:
      return state;
  }
}
