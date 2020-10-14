import React from "react";
import { MoviesList } from "./components/MoviesList/MoviesList";
import { SearchForm } from "./components/SearchForm/SearchForm";
import { useMovies } from "./hooks/useMovies";
import styled from "styled-components";
import { Status } from "./components/Status/Status";

const Container = styled.div`
  max-width: 75rem;
  margin: 5rem auto;
`;

const Header = styled.h1`
  font-size: 5rem;
  font-weight: 100;
  text-align: center;
`;

const StyledSearchForm = styled(SearchForm)`
  margin-bottom: 2rem;
`;

function App() {
  const [phrase, setPhrase] = React.useState("");
  const { movies, status, total, error } = useMovies(phrase);

  const onSubmit = (phrase: string) => setPhrase(phrase);

  return (
    <Container>
      <Header>Movie Browser</Header>
      <StyledSearchForm onSubmit={onSubmit} />

      {status === "LOADING" && <Status.Loading>Loading...</Status.Loading>}
      {status === "ERROR" && <Status.Error>{error}</Status.Error>}
      {status === "SUCCESS" && <MoviesList movies={movies} total={total} />}
    </Container>
  );
}

export default App;
