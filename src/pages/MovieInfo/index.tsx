import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { buildImageUrl } from "../../helpers/imageURL";
import { Companies } from "../../Components/Companies";
import { useDispatch } from "react-redux";
import { moviesActionCreator } from "../../store/reducers/movies/actionCreator";
import { useTypedSelector } from "../../hooks/useTypedSelector";

import "./style.css";

const MovieInfo = () => {
  const dispatch = useDispatch();
  const { movie } = useTypedSelector((state) => state.movies);
  const { id } = useParams<`id`>();

  useEffect(() => {
    dispatch(moviesActionCreator.fetchMovie(id as string));
  }, [dispatch, id]);

  console.log(movie);

  return (
    <>
      {movie.title ? (
        <div className="movie-info-container">
          <div
            className="movie-info-cover"
            style={{
              backgroundImage: `url(${buildImageUrl(
                movie.backdrop_path,
                true
              )})`,
            }}
          >
            <div className="movie-info-cover-info">
              <div className="movie-info-homebutton">
                <Link to={"/"}>← Go Home</Link>
              </div>
              <h1 className="movie-info-title">{movie.title}</h1>
              <div className="fill"></div>
            </div>
          </div>
          <p>{movie.overview}</p>
          <div className="movie-info-icons">
            <Companies companiesList={movie.production_companies} />
          </div>
        </div>
      ) : (
        <div>loading</div>
      )}
    </>
  );
};

export default MovieInfo;
