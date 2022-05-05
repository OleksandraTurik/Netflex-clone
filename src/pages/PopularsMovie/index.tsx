import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useRequest } from "../../hooks/useRequest";
import { FilmCard } from "../../Components/FilmCard";
import { buildImageUrl } from "../../helpers/imageURL";
import { Search } from "../../Components/Search";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useDispatch } from "react-redux";

import "./style.css";
import { moviesActionCreator } from "../../store/reducers/movies/actionCreator";

const PopularsMovies = () => {
  const { isAuth } = useTypedSelector((state) => state.auth);
  const [searchParams, setSearchParams] = useState();
  const dispatch = useDispatch();
  const { movies } = useTypedSelector((state) => state.movies);



  useEffect(() => {
    dispatch(
      moviesActionCreator.fetchMovies(
        // searchParams ? "/search/movie" : "/movie/popular",
        // { query: searchParams }
      )
    );
  }, [dispatch, searchParams]);

  const handleChange = (event: any) => {
    event.preventDefault();
    const query = event.target.value;
    setSearchParams(query);
  };

  //  const {data: popFilm}: any = useRequest (searchParams ? '/search/movie' :"/movie/popular", {query: searchParams})

  console.log(movies);
  console.log({ isAuth });
  return (
    <div className="films-container">
      <div className="auth">{isAuth}</div>
      <div className="search-card">
        <Search onChange={handleChange} />
      </div>
      {movies && (
        <div className="film-cards">
          {movies.map((el: any, index: any) => (
            <Link to={`/info/${el.id}`}>
              <FilmCard
                title={el.title}
                key={index}
                image={buildImageUrl(el.poster_path)}
              />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default PopularsMovies;
