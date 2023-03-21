import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { buildImageUrl } from "../../helpers/imageURL";
import { Companies } from "../../Components/Companies";
import { useDispatch } from "react-redux";
import { moviesActionCreator } from "../../store/reducers/movies/actionCreator";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { StarOutlined } from "@ant-design/icons";
import { Button } from "antd";
import FavouriteButton from "../../Components/FavouriteButton";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase";

import "./style.css";


const MovieInfo = () => {
  const dispatch = useDispatch();
  const { movie } = useTypedSelector((state) => state.movies);
  const { id } = useParams<`id`>();

  useEffect(() => {
    dispatch(moviesActionCreator.fetchMovie(id as string));
  }, [dispatch, id]);

  console.log(movie);

  const handleFavouritecLick = async () => {
    const docRef = await addDoc(collection( db, 'favourite'), {id: id, movieName: movie.title} )
    console.log(docRef);
  };

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
              <div className="films-info">
                <h1 className="movie-info-title">{movie.title}</h1>
                <FavouriteButton onFavouriteClick={handleFavouritecLick} isFavourite={false}/>
              </div>

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
