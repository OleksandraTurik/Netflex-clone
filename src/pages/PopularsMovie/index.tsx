import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FilmCard } from "../../Components/FilmCard";
import { buildImageUrl } from "../../helpers/imageURL";
import { Search } from "../../Components/Search";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useDispatch } from "react-redux";
import { moviesActionCreator } from "../../store/reducers/movies/actionCreator";
import { useDebounce } from "../../hooks/useDebounce";

import "./style.css";

const PopularsMovies = () => {
  const { isAuth } = useTypedSelector((state) => state.auth);
  const [searchParams, setSearchParams] = useState<string>("");
  const dispatch = useDispatch();
  const { movies } = useTypedSelector((state) => state.movies);

  const handleChange = (event: any) => {
    event.preventDefault();
    const query = event.target.value;
    setSearchParams(query);
  };

  const query = useDebounce<string>(searchParams, 500);

  useEffect(() => {
    query.length
      ? dispatch(moviesActionCreator.fetchSearch(query))
      : dispatch(moviesActionCreator.fetchMovies());
  }, [dispatch, query]);

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
