import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useRequest } from "../../hooks/useRequest";
import { buildImageUrl } from "../../helpers/imageURL";
import "./style.css";
import { Companies } from "../../Components/Companies";
import { useDispatch } from "react-redux";
// import { movieActionCreator } from "../../store/reducers/movies/actionCreator";

const MovieInfo = () => {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(movieActionCreator.fetchMovie());
  // }, []);

  const {id} = useParams<`id`>()
  const {data: movie}: any = useRequest(`/movie/${id}`)
  console.log(movie)

  return (
    <>
      {movie ? (
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
