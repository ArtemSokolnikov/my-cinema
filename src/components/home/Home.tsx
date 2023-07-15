import React, { useEffect } from "react";
import { Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchGenre, fetchMovies } from "../../actions/userActions";
import { Movie, State } from "../../types";
import Loader from "../loader/Loader";
import MovieCard from "../movieCard/MovieCard";
import { HomeContainer } from "./styles/HomeStyles";

const Home = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state: State) => state.movies);

  useEffect(() => {
    const ticketsArr: Array<Movie> = [];
    const favouritesArr: Array<Movie> = [];
    // @ts-ignore
    dispatch(fetchMovies());
    // @ts-ignore
    dispatch(fetchGenre());
    if (!movies) {
      localStorage.setItem("tickets", JSON.stringify(ticketsArr));
      localStorage.setItem("favourites", JSON.stringify(favouritesArr));
    }
  },[]);

  return (
    <HomeContainer>
      {!movies ? (
        <Loader />
      ) : (
        <Row xs={1} lg={4}>
          {movies.map((item, idx) => (
            <MovieCard key={idx} movie={item} />
          ))}
        </Row>
      )}
    </HomeContainer>
  );
};

export default Home;
