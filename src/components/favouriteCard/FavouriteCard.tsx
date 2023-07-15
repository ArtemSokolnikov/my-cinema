import Favorite from "@mui/icons-material/Favorite";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import React from "react";
import { Card, Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  changeMovie,
  removeFavourites,
  setLike,
} from "../../actions/userActions";
import { PropsMovieCard } from "../../types";
import { details } from "../../utils/constants";
import { MovieCardContainer } from "./styles/FavouriteCardStyles";

const FavouriteCard = ({ movie }: PropsMovieCard) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const image = `https://image.tmdb.org/t/p/w300/${movie.backdrop_path}`;
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const [checked] = React.useState(true);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // @ts-ignore
      dispatch(setLike(movie.title!, false));
    // @ts-ignore
      dispatch(removeFavourites(movie));
  };

  return (
    <MovieCardContainer>
      <Col>
        <Card>
          <Card.Img
            variant="bottom"
            src={image}
            alt="Card image"
            className="image"
          />
          <Card.Body>
            <Card.Title>{movie.title}</Card.Title>
          </Card.Body>
        </Card>
      </Col>
      <Checkbox
        {...label}
        icon={<FavoriteBorder />}
        checkedIcon={<Favorite />}
        checked={checked}
        onChange={handleChange}
        inputProps={{ "aria-label": "controlled" }}
      />
      <Button
        sx={{ boxShadow: 0, color: "black" }}
        onClick={() => {
            navigate(details);
          // @ts-ignore
            dispatch(changeMovie(movie!));
        }}
        variant="text"
      >
        Buy tickets
      </Button>
    </MovieCardContainer>
  );
};

export default FavouriteCard;
