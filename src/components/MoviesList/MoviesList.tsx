import React from "react";
import styled from "styled-components";
import { Movie } from "../../models/Movie";
import { MovieCard } from "../MovieCard/MovieCard";

const MoviesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1rem;
  align-items: flex-start;
`;

type Props = {
  movies: Movie[];
  total: number;
};

const Info = styled.span`
  color: var(--electron-blue);
  font-size: 2rem;
  margin-bottom: 2rem;
  display: block;
  font-weight: 300;
`;

export const MoviesList = ({ movies, total }: Props) => (
  <React.Fragment>
    {total > movies.length && (
      <Info>We're displaying 10 results from {total} available.</Info>
    )}
    <MoviesContainer>
      {movies.map((movie) => (
        <MovieCard key={movie.imdbID} {...movie} />
      ))}
    </MoviesContainer>
  </React.Fragment>
);
