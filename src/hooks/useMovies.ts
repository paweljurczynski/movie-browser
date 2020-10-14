import React from "react";
import { OMDB_HOST } from "../constants";
import { Movie } from "../models/Movie";

type Status = "IDLE" | "LOADING" | "SUCCESS" | "ERROR";

export const useMovies = (phrase: string) => {
  const [status, setStatus] = React.useState<Status>("IDLE");
  const [movies, setMovies] = React.useState<Movie[]>([]);
  const [total, setTotal] = React.useState(0);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    const fetchMovies = async () => {
      setStatus("LOADING");
      
      const response = await fetch(`${OMDB_HOST}&s=${phrase}`);
      const data = await response.json();

      if (data.Error) {
        setStatus("ERROR");
        return setError(data.Error);
      }

      setStatus("SUCCESS");
      setTotal(data.totalResults);
      setMovies(data.Search);
    };

    if (phrase) {
      fetchMovies();
    }
  }, [phrase]);

  return { status, movies, total, error };
};
