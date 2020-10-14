import React from "react";
import styled from "styled-components";
import { Movie } from "../../models/Movie";

const Card = styled.a`
  display: block;
  box-shadow: 0 0 1.5rem 0 rgba(0, 0, 0, 0.05);
  background: var(--white);
  text-decoration: none;
  color: black;
  text-align: center;
`;

const Poster = styled.img`
  width: 100%;
  min-height: 19rem;
`;
const Year = styled.span`
  display: block;
  font-weight: bold;
  margin-top: 0.5rem;
`;

const Title = styled.h2`
  font-size: 1.2rem;
  margin: 1rem 0;
  padding: 0 1rem;
`;

const PosterUnavailable =
  "https://dummyimage.com/215x315/ffffff/000000&text=No+Poster";

export const MovieCard = (props: Movie) => {
  const posterUrl = props.Poster !== "N/A" ? props.Poster : PosterUnavailable;
  const IMDB = "https://www.imdb.com/title";

  return (
    <Card href={`${IMDB}/${props.imdbID}`} target="_blank">
      <Poster src={posterUrl} alt={props.Title} />
      <Year>{props.Year}</Year>
      <Title>{props.Title}</Title>
    </Card>
  );
};
